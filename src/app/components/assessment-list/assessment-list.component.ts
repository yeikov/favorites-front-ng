import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from 'src/app/services/assessment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {

  @Input()
  media: String;
  @Input()
  assessment: String;
  @Input()
  userId: String;



  constructor(private assessmentService: AssessmentService, private router: Router) { }

  resIn: boolean = false;
  res;

  favorite: boolean = false;
  recommend: boolean = false;

  ngOnInit(): void {

    console.log('->', this.media, this.assessment, this.userId)
    if (this.assessment == 'favorite') {
      this.favorite = true;
    } else {

      this.recommend = true;
    }

    if(this.userId == null || this.userId == undefined){

      this.res = this.assessmentService.media(this.media).subscribe(res => {
        this.res = res;
        this.resIn = true;
      });
    } else {
      
      this.res = this.assessmentService.userMedia(this.userId, this.media).subscribe(res => {
        this.res = res;
        this.resIn = true;
      });
    }
  }

  item (assessment) {
    console.log(assessment);
    if (this.userId==null){
      this.router.navigate(['registry/'+ assessment.registry.id])
    } else{
      this.router.navigate(['assessment/' + assessment.id]);
    }

  }

}

