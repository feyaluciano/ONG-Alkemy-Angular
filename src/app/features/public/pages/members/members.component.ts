import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/app/features/models/Member';
import { MembersService } from 'src/app/features/services/members/members.service';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members!: Member[];
  membersCompleted: boolean = false;

  

  constructor(
    private membersSvc: MembersService,
    public dialog: MatDialog)
    
    
    {  this.membersSvc.getMember()
      .subscribe((resp: any) => {
      
          const members = resp.data;
          this.members = members.slice(0, 4);
          this.membersCompleted = true;
  },
      (error: any) => {

        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al obtener las novedades'; 
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

        //
        const dialogRef = this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {
            type: "error",
            titleToShow:"",
            messageToShow: errorMessage,
            showButtonsOkCancel: false
          },
        });            
        
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`); 
        });
      });
  }

  private elementCard: any;

  showInfo(i:number){
    this.elementCard = document.getElementById('card-'+i);    
    this.elementCard!.classList.add('animate__pulse');
    this.elementCard!.addEventListener('animationend', () => {
      this.elementCard!.classList.remove('animate__pulse');
    });    
  }
  
  ngOnInit(): void {   
  }

}
