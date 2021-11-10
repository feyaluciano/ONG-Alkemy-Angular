
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({ 
  imports:[MatFormFieldModule    
  ],  
  exports: [         
    MatFormFieldModule, 
    MatDialogModule,
    MatButtonModule,    
  ]
})
export class MaterialModule { }
