import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  //default route
  { path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'persons', component: PersonComponent },  
  { path: 'datail:id', component: PersonDetailsComponent },  
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
