
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({ 
  imports:[MatFormFieldModule    
  ],  
  exports: [         
    MatFormFieldModule, 
    MatDialogModule,
    MatButtonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule   
  ]
})
export class MaterialModule { }
