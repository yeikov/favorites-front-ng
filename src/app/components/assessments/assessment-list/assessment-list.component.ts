import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../assessment.service';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistryService } from '../../registries/registry.service';
import { SessionService } from '../../../common/frame/login/session.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

import { Page } from '../../../common/utilities';

@Component({
  selector: 'app-assessment-list',
  standalone: true,
  imports: [NgbPagination],
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

  number = 0;
  totalElements=0;
  totalPages=0;
  size=10
  numberOfElements = 0;
  first=true;
  last=true;
  empty=true;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
    })

    this.registryService.one(this.paramId).subscribe( res => {
      this.registry = res;
    })

  }

  item(assessment: any) {
    this.router.navigate(['assessment/' + assessment.id]);
  }

  changePage(event: number){
    this.number = event - 1;
     this.assessmentService.registry(this.paramId+`?page=${event-1}&size=${this.size}&sort=registeredAt,asc`).subscribe(res => {
      this.updatePage (res);

    });
  }

  updatePage(res:Page){
    this.list = res.content;
    this.totalElements = res.totalElements;
    this.totalPages = res.totalPages;
    this.number = res.number;
    this.size = res.size;
    this.numberOfElements = res.numberOfElements;
    this.first = res.first;
    this.last = res.last;
  }
}

