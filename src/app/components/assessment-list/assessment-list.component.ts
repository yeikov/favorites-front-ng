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
  user = { id: '', name: '', city: '', born: '' };


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

    console.log('->', this.user)


    this.assessmentService.user(this.user.id).subscribe(res => {

      //this.list = res.filter((r: { favorite: number; }) => r.favorite != 0).sort(function (a: { favorite: number; }, b: { favorite: number; }) { return a.favorite - b.favorite });

      this.list = res;

      this.resIn = true;
    });

  }

  item(assessment: any) {

    if (this.user.id === null) {
      this.router.navigate(['registry/' + assessment.registry.id])
    } else {
      this.router.navigate(['assessment/' + assessment.id]);
    }

  }

}

