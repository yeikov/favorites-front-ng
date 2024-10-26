import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { RegistryService } from '../registry.service';
import { RegistryListComponent } from '../registry-list/registry-list.component';
import { Registry } from '../registry.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registry-explorer',
  standalone: true,
  imports: [RegistryListComponent, RouterLink, FormsModule],
  templateUrl: './registry-explorer.component.html',
  styleUrl: './registry-explorer.component.css'
})
export class RegistryExplorerComponent {

  constructor(private registryService: RegistryService) { }

  media = 'book';
  assessment = 'favorites';

  searchText = '';
  searchCardActive = true;

  searchResult: Registry[] = [];

  searchCard(value: boolean) {
    this.searchCardActive = value;
  }

  search() {
    console.log(this.searchText);
    if (this.searchText !== '')
      this.registryService.find(this.searchText).subscribe(res => this.searchResult = res)

  }
}
