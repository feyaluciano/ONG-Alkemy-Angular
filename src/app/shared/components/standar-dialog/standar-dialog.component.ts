import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StandarDialogData } from 'src/app/features/models/StandarDialogData';

@Component({
  selector: 'app-standar-dialog',
  templateUrl: './standar-dialog.component.html',
  styleUrls: ['./standar-dialog.component.scss']
})
export class StandarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StandarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StandarDialogData,
  ) { }


  closeDialog(toReturn:string) {
    this.dialogRef.close(toReturn);
  }

  ngOnInit() {
  }

}
