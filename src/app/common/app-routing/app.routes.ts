import { Routes } from '@angular/router';
import { AssessmentListComponent } from '../../components/assessments/assessment-list/assessment-list.component';
import { AssessmentComponent } from '../../components/assessments/assessment/assessment.component';
import { HomeComponent } from '../../components/home/home.component';
import { RegistryComponent } from '../../components/registries/registry/registry.component';
import { UserComponent } from '../../components/users/user/user.component';
import { LoginComponent } from '../../components/login/login.component';
import { AssessmentEditCreateComponent } from '../../components/assessments/assessment-edit-create/assessment-edit-create.component';
import { RegistryListComponent } from '../../components/registries/registry-list/registry-list.component';
import { RegistryExplorerComponent } from '../../components/registries/registry-explorer/registry-explorer.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', title: 'App Home Page', component: HomeComponent },
    { path: 'login', title: 'App Login Page', component: LoginComponent },
    { path: 'user/:id', title: 'App User Page', component: UserComponent },
    { path: 'assessment/add/:registryId', title: 'App New Assessment', component: AssessmentEditCreateComponent },
    { path: 'assessment/:assessmentId', title: 'App Assessment Detail', component: AssessmentComponent },
    { path: 'assessment/:assessmentId/edit', title: 'App Edit Assessment', component: AssessmentEditCreateComponent },
    { path: 'registry', title: 'App Add Registry', component: RegistryComponent },
    { path: 'registry/:id', title: 'App Registry', component: RegistryComponent },
    { path: 'registry/:id/assessments', title: 'App Registry Assessments Page', component: AssessmentListComponent },
    { path: 'registry_explorer', title: 'App Registry List Explorer', component: RegistryExplorerComponent },
];
