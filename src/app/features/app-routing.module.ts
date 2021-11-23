import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
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
  imports: [CommonModule, RouterModule.forRoot(routes, {
    // On navigation, restores the scroll position to top.
    scrollPositionRestoration: 'enabled'
  })],
})
export class AppRoutingModule {}
