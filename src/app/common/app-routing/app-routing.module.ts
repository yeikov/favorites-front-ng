//ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//??
import { CommonModule } from '@angular/common';

//common
import { LoginComponent } from 'src/app/common/login/login.component';
//app
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { AssessmentComponent } from 'src/app/components/assessment/assessment.component';
import { RegistryComponent } from 'src/app/components/registry/registry.component';





const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'assessment/:id', component: AssessmentComponent },
  { path: 'registry/:id', component: RegistryComponent },
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }