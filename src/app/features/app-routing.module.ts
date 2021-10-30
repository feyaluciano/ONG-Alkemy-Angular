import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  // {    
  //   path: '',
  //   loadChildren: () => import('./public/public.module').then(
  //     m => m.PublicModule
  //     ),         
  // },
  // {path:'',redirectTo:''},
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(
      m => m.BackofficeModule
      ),         
  },  
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(
      m => m.PublicModule
      ),         
  },  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
