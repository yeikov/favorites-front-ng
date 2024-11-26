import { Component, OnInit } from '@angular/core';

import { RegistryListComponent } from '../registries/registry-list/registry-list.component';
import { ViewerListComponent } from '../viewer/viewer-list/viewer-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[ViewerListComponent, RegistryListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
