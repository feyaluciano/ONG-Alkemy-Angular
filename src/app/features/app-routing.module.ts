import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [


  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(
      m => m.PublicModule
      ),         
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(
      m => m.BackofficeModule
      ),         
  },
  
    // { 
    //   path: "home", 
    //   component: HomeComponent },
    //   { 
    //     path: "backoffice", 
    //     component: BackofficeComponent },






        
  //     { 
  //       path: "actividades", 
  //       component: ActivityFormComponent },

  // {
  //   path: "",
  //   redirectTo: "home",
  //   pathMatch: "full",
  // },
  // {
  //   path: "**",
  //   redirectTo: "actividades",
  //   pathMatch: "full",
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
