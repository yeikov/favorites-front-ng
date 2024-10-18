import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../../services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {



  constructor(
    private assessmentService: AssessmentService,
    public sessionService: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  paramId = '';
  resIn: boolean = false;
  list: any;

  favorite: boolean = false;
  recommend: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];

      
    })




    this.assessmentService.registry(this.paramId).subscribe(res => {

      //this.list = res.filter((r: { favorite: number; }) => r.favorite != 0).sort(function (a: { favorite: number; }, b: { favorite: number; }) { return a.favorite - b.favorite });

      this.list = res;

      this.resIn = true;
    });

  }

  item(assessment: any) {

    this.router.navigate(['assessment/' + assessment.id]);


  }

}

