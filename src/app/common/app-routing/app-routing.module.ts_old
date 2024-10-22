//ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//??
import { CommonModule } from '@angular/common';

//common
import { LoginComponent } from '../../common/login/login.component';
//app
import { HomeComponent } from '../../components/home/home.component';
import { UserComponent } from '../../components/user/user.component';
import { AssessmentComponent } from '../../components/assessment/assessment.component';
import { RegistryComponent } from '../../components/registry/registry.component';
import { AssessmentListComponent } from '../../components/assessment-list/assessment-list.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'assessment/:id', component: AssessmentComponent },
  { path: 'registry/:id', component: RegistryComponent },
  { path: 'registry/:id/assessments', component: AssessmentListComponent },
  
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