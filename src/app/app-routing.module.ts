import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationUsersComponent } from './creation-users/creation-users.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [ 
   
  {path:"user",component:UsersComponent},
  {path:"creationUser", component:CreationUsersComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
