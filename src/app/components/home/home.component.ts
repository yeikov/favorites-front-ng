import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { RegistryListComponent } from '../registry-list/registry-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[UserListComponent, RegistryListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
