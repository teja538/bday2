import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  // {path:"**",component:OneComponent},
  {path:"",redirectTo:'/one',pathMatch:'full'},
  {path:"one",component:OneComponent },
  {path:"two",component:TwoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
