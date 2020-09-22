import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from 'src/app/services/registry.service';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  paramId;
  registry;
  registryIn;
  assessments;
  assessmentsIn;
  isCollapsed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private registryService: RegistryService,
    private assessmentService: AssessmentService,
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
    });
    this.assessmentService.registry(this.paramId).subscribe(res => {
      this.assessments = res.content,
      this.assessmentsIn = true
    })
  }

  item (assessment) {
    console.log(assessment);
    this.router.navigate(['assessment/'+ assessment.id])
  }

}
