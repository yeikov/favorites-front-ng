import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../assessment.service';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistryService } from '../../registries/registry.service';
import { SessionService } from '../../login/session.service';

@Component({
  selector: 'app-assessment-list',
  standalone: true,
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {

  constructor(
    private assessmentService: AssessmentService,
    public sessionService: SessionService,
    public registryService: RegistryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  paramId = '';
  registry = {title: '', media: '', author: '', productionDate: ''};
  list: any;

  favorite: boolean = false;
  recommend: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];


    })

    this.registryService.one(this.paramId).subscribe( res => {
      this.registry = res;
    })

    this.assessmentService.registry(this.paramId).subscribe(res => {
      this.list = res;
    });

  }

  item(assessment: any) {
    this.router.navigate(['assessment/' + assessment.id]);
  }

}

