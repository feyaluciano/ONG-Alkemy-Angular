import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StandarDialogData } from 'src/app/features/models/StandarDialogData';

@Component({
  selector: 'app-standar-dialog',
  templateUrl: './standar-dialog.component.html',
  styleUrls: ['./standar-dialog.component.scss']
})
export class StandarDialogComponent implements OnInit {


  @ViewChild("dialogInfo", { static: true })  dialogInfo!: TemplateRef<any>;
  @ViewChild("dialogError", { static: true }) dialogError!: TemplateRef<any>;
  @ViewChild("dialogConfirm", { static: true }) dialogConfirm!: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<any>;

  constructor(
    public dialogRef: MatDialogRef<StandarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StandarDialogData,
  ) { }


  closeDialog(toReturn:string) {
    this.dialogRef.close(toReturn);
  }

  ngOnInit() {

    switch(this.data.type) { 
      case "error": { 
         this.template=this.dialogError;
         break; 
      } 
      case "info": { 
        this.template=this.dialogInfo;
         break; 
      } 
      default: { 
        this.template=this.dialogConfirm;
         break; 
      } 
   } 

  }

}
