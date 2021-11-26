import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../../services/members/members.service';
import { Member } from '../../../models/Member';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members!: Member[];
  form!: FormGroup;

  constructor(
    private membersSvc: MembersService,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({      
      search_member: ['', [Validators.required]]        
    });

    this.listMembers();
  }

  ngOnInit(): void {
    this.form.valueChanges
    .pipe(debounceTime(1500))
    .subscribe(data => {         
      if (data.search_member.length >= 2) {
        this.searchMember(data.search_member);                
      } else {
        this.listMembers();
      }
    });      
  }

  listMembers() {
    this.membersSvc.getMember()
      .subscribe((resp: any) => {
        this.members = resp.data;
      });
  }

  searchMember(text:string) {
    this.membersSvc.searchMembers(text)
      .subscribe((resp: any) => {
        this.members = resp.data;

        if (this.members.length === 0){          
            this.listMembers();      
        }

      }, (error) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al buscar los miembros'; 
              break; 
          } 
          case 401: {  
            errorMessage = 'Usted no esta autorizado para acceder a este recurso';
              break; 
          } 
          default: { 
            errorMessage = 'Error desconocido';
              break; 
          } 
        }
        this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {
            type: "error",
            titleToShow:"",
            messageToShow: errorMessage,
            showButtonsOkCancel: false
          }
        });      
      });
  }

  newMember() {
    this.router.navigate(['/member']);
  }

  editMember(id: string | undefined) {
    this.router.navigate(['/member/edit', id]);
  }

  deleteMember(id: string | undefined, index: number) {

    const dialogRef = this.dialog.open(StandarDialogComponent, {
      height: '300px',
      width: '400px',
      data: {
        type: "confirm",
        titleToShow:"",
        messageToShow: `¿Seguro de eliminar al miembro con id ${id}?`,
        showButtonsOkCancel: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.membersSvc.deleteMember(id)
        .subscribe(() => {
          this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {
              type: "info",
              titleToShow:"",
              messageToShow: "Miembro eliminado satisfatoriamente",
              showButtonsOkCancel: false
            }
          });
        },
        () => {
          this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {
              type: "error",
              titleToShow:"",
              messageToShow: "No se pudo eliminar",
              showButtonsOkCancel: false
            }
          });
        },
        () => {
          this.members.splice(index, 1);
        });
      }
    });

    
  }

}
