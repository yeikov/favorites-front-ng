import { Routes } from '@angular/router';
import { AssessmentListComponent } from '../../components/assessment-list/assessment-list.component';
import { AssessmentComponent } from '../../components/assessment/assessment.component';
import { HomeComponent } from '../../components/home/home.component';
import { RegistryComponent } from '../../components/registry/registry.component';
import { UserComponent } from '../../components/user/user.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'assessment/:id', component: AssessmentComponent },
    { path: 'registry/:id', component: RegistryComponent },
    { path: 'registry/:id/assessments', component: AssessmentListComponent },
];
