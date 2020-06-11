import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistryService } from 'src/app/services/registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  paramId;
  registry;
  registryIn;
  isCollapsed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private registryService: RegistryService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params.id;
      
      this.datosRegistry();
    })
  }
    
  datosRegistry(){
    this.registryService.one(this.paramId).subscribe(res => {
      this.registry = res,
      this.registryIn = true
    })
  }

}
