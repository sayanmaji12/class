import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "home",
    component: NavComponent,
    children:[{
      path:"dashboard/:xyz/:id",
      component: DashboardComponent
    }]
  },{
    path: "admin",
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
