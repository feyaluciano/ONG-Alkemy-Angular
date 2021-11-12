
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({ 
  imports:[MatFormFieldModule    
  ],  
  exports: [         
    MatFormFieldModule, 
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
