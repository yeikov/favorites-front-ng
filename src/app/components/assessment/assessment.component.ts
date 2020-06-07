import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  @Input()
  media:String;
  @Input()
  assessment:String;


  
  constructor(private assessmentService: AssessmentService) { }
  
  resIn:boolean = false;
  res;
  
  favorite:boolean = false;
  recommend:boolean = false;

  ngOnInit(): void {
    if (this.assessment == 'favorite'){
this.favorite=true;
} else {

  this.recommend=true;
}

    this.res = this.assessmentService.media(this.media).subscribe(res =>{
      this.res = res;
      this.resIn = true;
    });
  }

}
