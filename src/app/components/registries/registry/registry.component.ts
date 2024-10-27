import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe, Location } from '@angular/common';

import { RegistryService } from '../registry.service';
import { AssessmentStatisticalSummaryComponent } from '../../assessments/assessment-statistical-summary/assessment-statistical-summary.component';
import { UiModule } from '../../../ui/ui.module';
import { SessionService } from '../../login/session.service';


@Component({
  selector: 'app-registry',
  standalone: true,
  imports:[AssessmentStatisticalSummaryComponent, UiModule, JsonPipe],
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  paramId = '';
  registry = null;
  registryIn = false;
  assessments = null;
  assessmentsIn = false;
  isCollapsed = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private registryService: RegistryService,
    private sessionService: SessionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      this.datosRegistry();
    })
  }

  datosRegistry() {
    this.registryService.one(this.paramId).subscribe((res: null) => {
      this.registry = res,
        this.registryIn = true
    });
  }

  goToItemAssessments(id: string) {
    this.router.navigate([`registry/${id}/assessments`])
  }

  goBack(){
    this.location.historyGo(-1);
  }

}
