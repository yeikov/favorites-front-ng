import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AssessmentService } from '../../services/assessment.service';
import { RegistryService } from '../../services/registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  paramId= '';
  registry = null;
  registryIn = false;
  assessments = null;
  assessmentsIn = false;
  isCollapsed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private registryService: RegistryService,
    private assessmentService: AssessmentService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      
      this.datosRegistry();
    })
  }
    
  datosRegistry(){
    this.registryService.one(this.paramId).subscribe((res: null) => {
      this.registry = res,
      this.registryIn = true
    });
    this.assessmentService.registry(this.paramId).subscribe((res) => {
      this.assessments = res,
      this.assessmentsIn = true
    })
  }

  item (assessment: { id: string; }) {
    console.log(assessment);
    this.router.navigate(['assessment/'+ assessment.id])
  }

}
