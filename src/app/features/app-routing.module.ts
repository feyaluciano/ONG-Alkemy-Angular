import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BackofficeGuard } from "../core/guards/backoffice.guard";


const routes: Routes = [
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(
      m => m.BackofficeModule,
      ), canActivate:[BackofficeGuard]        
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
