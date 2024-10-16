import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../../services/assessment.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {

  @Input()
  media = '';
  @Input()
  assessment = '';
  @Input()
  userId = '';


  constructor(
    private assessmentService: AssessmentService, 
    public sessionService: SessionService, 
    private router: Router) { }

  resIn: boolean = false;
  list: any;

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

      //en este caso se muestran en el detalle de usuario [2]
      this.assessmentService.userMedia(this.userId, this.media).subscribe(res => {
        
        if(this.assessment=='favorite'){
          this.list = res.filter((r: { favorite: number; }) => r.favorite!=0).sort(function(a: { favorite: number; },b: { favorite: number; }){return a.favorite - b.favorite});
        } else {
          this.list = res.filter((r: { recommend: number; }) => r.recommend!=0).sort(function(a: { recommend: number; },b: { recommend: number; }){return a.recommend - b.recommend});
        }
        this.resIn = true;
      });
    
  }

  item (assessment: any) {
    console.log(assessment);
    if (this.userId==null){
      this.router.navigate(['registry/'+ assessment.registry.id])
    } else{
      this.router.navigate(['assessment/' + assessment.id]);
    }

  }

}

