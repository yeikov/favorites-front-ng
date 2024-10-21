import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  public isCollapsed = true;

  constructor(private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  assessment: any;
  

  paramId: number = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      console.log('paramId', this.paramId)
      this.datosAssessment();
    })

  }

  datosAssessment() {
    this.assessmentService.one(this.paramId).subscribe(res => {
      this.assessment = res
    })
  }

  item(entity: string, id: string) {
    this.router.navigate([entity + '/' + id]);
  }

}