import { Component, OnInit } from '@angular/core';

import { RegistryListComponent } from '../../../components/registries/registry-list/registry-list.component';
import { ViewerListComponent } from '../../../components/viewer/viewer-list/viewer-list.component';


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
