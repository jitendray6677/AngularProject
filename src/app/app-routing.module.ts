import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'', component:SignupComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'registration', component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
