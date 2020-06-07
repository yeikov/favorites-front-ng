//ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//??
import { CommonModule } from '@angular/common';

//app
import { HomeComponent } from 'src/app/components/home/home.component';






const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  
  
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