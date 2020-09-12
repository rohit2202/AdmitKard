import { LoginguardGuard } from './loginguard.guard';
import { Screen3Component } from './screen3/screen3.component';
import { Screen2Component } from './screen2/screen2.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:SigninComponent},
  {path:'screen2',component:Screen2Component},
  {path:'screen3', component:Screen3Component, canActivate: [LoginguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
