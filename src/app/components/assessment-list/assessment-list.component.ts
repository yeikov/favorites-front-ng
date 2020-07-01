import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from 'src/app/services/assessment.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

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


  constructor(
    private assessmentService: AssessmentService, 
    public sessionService: SessionService, 
    private router: Router) { }

  resIn: boolean = false;
  res;

  favorite: boolean = false;
  recommend: boolean = false;

  ngOnInit(): void {
    /*varios escenarios
    *
     [2]-usuario. mostrará valoraciones de un usuario
     [a]-mostrará favoritos
     [b]-mostrará recomendaciones
    */

    console.log('->', this.media, this.assessment, this.userId)
    if (this.assessment == 'favorite') {
      this.favorite = true;
    } else {
      this.recommend = true;
    }

    /* if(this.userId == null || this.userId == undefined){
      //en este caso se muestran en home con resultados generales [1]
      this.res = this.assessmentService.media(this.media).subscribe(res => {
        this.res = res;
        
        this.resIn = true;
      });
    } else { */
      //en este caso se muestran en el detalle de usuario [2]
      this.res = this.assessmentService.userMedia(this.userId, this.media).subscribe(res => {
        this.res = res;
        if(this.assessment=='favorite'){
          this.res.content = this.res.content.filter(r => r.favorite!=0).sort(function(a,b){return a.favorite - b.favorite});
        } else {
          this.res.content = this.res.content.filter(r => r.recommend!=0).sort(function(a,b){return a.recommend - b.recommend});
        }
        this.resIn = true;
      });
    /* } */
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

