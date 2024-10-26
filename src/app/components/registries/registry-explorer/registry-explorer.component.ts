import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistryService } from '../registry.service';
import { RegistryListComponent } from '../registry-list/registry-list.component';

@Component({
  selector: 'app-registry-explorer',
  standalone: true,
  imports: [RegistryListComponent],
  templateUrl: './registry-explorer.component.html',
  styleUrl: './registry-explorer.component.css'
})
export class RegistryExplorerComponent{

  media = 'book';
  assessment = 'favorites';


}
