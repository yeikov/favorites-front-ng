import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  isCollapsed=true;

  constructor(private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

    assessment;
    assessmentIn: boolean = false;
  
    paramId: number;
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.paramId = params.id;
        console.log('paramId', this.paramId)
        this.datosAssessment();
      })
      
    }

    datosAssessment(){
      this.assessmentService.one(this.paramId).subscribe(res => {
        this.assessment = res,
        this.assessmentIn = true
      })
    }

    item(entity, id){
      this.router.navigate([entity+'/'+id]); 
    }

}