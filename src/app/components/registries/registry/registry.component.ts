import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe, Location } from '@angular/common';

import { RegistryService } from '../registry.service';
import { AssessmentStatisticalSummaryComponent } from '../../assessments/assessment-statistical-summary/assessment-statistical-summary.component';
import { UiModule } from '../../../ui/ui.module';
import { SessionService } from '../../../common/frame/login/session.service';
import { AssessmentService } from '../../assessments/assessment.service';
import { Registry } from '../registry.model';


@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [AssessmentStatisticalSummaryComponent, UiModule, JsonPipe],
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  paramId = '';
  registry = new Registry();
  registryIn = false;
  assessments = null;
  assessmentsIn = false;
  isCollapsed = true;
  isLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private registryService: RegistryService,
    private sessionService: SessionService,
    private assessmentService: AssessmentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.isLoaded = this.sessionService.viewerLogged();

    this.activatedRoute.params.subscribe(params => {
      if (params['id'])
        this.paramId = params['id'];
      this.datosRegistry();
    })
  }

  datosRegistry() {
    if (this.paramId)
      this.registryService.one(this.paramId).subscribe((res: Registry) => {
        this.registry = res,
          this.registryIn = true;
      });
    if (!this.paramId)
      this.registryIn = true;
  }

  goToItemAssessments(id: string) {
    this.assessmentService.path = 'assessments';
    this.router.navigate([`registry/${id}/assessments`]);
  }

  goBack() {
    this.location.historyGo(-1);
  }

  deleteRegistry(id: string) {

    this.registryService.delete(id).subscribe(res => {
      this.router.navigate(['home'])
    })
  }

  gotoNewAssessment(id: string) {
    this.router.navigate([`assessment/add/${id}`]);
  }

}
