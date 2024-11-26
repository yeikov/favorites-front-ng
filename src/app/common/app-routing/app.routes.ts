import { Routes } from '@angular/router';
import { AssessmentListComponent } from '../../components/assessments/assessment-list/assessment-list.component';
import { AssessmentComponent } from '../../components/assessments/assessment/assessment.component';
import { HomeComponent } from '../frame/home/home.component';
import { RegistryComponent } from '../../components/registries/registry/registry.component';

import { AssessmentEditCreateComponent } from '../../components/assessments/assessment-edit-create/assessment-edit-create.component';

import { RegistryAddComponent } from '../../components/registries/registry-add/registry-add.component';
import { RegistryExplorerComponent } from '../../components/registries/registry-explorer/registry-explorer.component';
import { ViewerComponent } from '../../components/viewer/viewer/viewer.component';
import { LoginComponent } from '../frame/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', title: 'App Home Page', component: HomeComponent },
    { path: 'login', title: 'App Login Page', component: LoginComponent },
    { path: 'viewer/:id', title: 'App Viewer Page', component: ViewerComponent },
    { path: 'assessment/add/:registryId', title: 'App New Assessment', component: AssessmentEditCreateComponent },
    { path: 'assessment/:assessmentId', title: 'App Assessment Detail', component: AssessmentComponent },
    { path: 'assessment/:assessmentId/edit', title: 'App Edit Assessment', component: AssessmentEditCreateComponent },
    { path: 'registry', title: 'App Add Registry', component: RegistryAddComponent },
    { path: 'registry/:id', title: 'App Registry', component: RegistryComponent },
    { path: 'registry/:id/assessments', title: 'App Registry Assessments Page', component: AssessmentListComponent },
    { path: 'registry_explorer', title: 'App Registry List Explorer', component: RegistryExplorerComponent },
];
