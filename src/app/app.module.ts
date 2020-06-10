import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } 
from './common/app-routing/app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/frame/header/header.component';
import { FooterComponent } from './common/frame/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

/* ui */

import {UiModule} from './ui/ui.module';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './components/user/user.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AssessmentListComponent } from './components/assessment-list/assessment-list.component';
import { RegistryListComponent } from './components/registry-list/registry-list.component';
import { RegistryComponent } from './components/registry/registry.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AssessmentComponent,
    UserListComponent,
    AssessmentListComponent,
    RegistryListComponent,
    RegistryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }