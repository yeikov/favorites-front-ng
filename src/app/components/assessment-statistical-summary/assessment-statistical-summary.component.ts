import { Component, Input, Pipe } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { DecimalPipe, NgLocaleLocalization, NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-assessment-statistical-summary',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './assessment-statistical-summary.component.html',
  styleUrl: './assessment-statistical-summary.component.css'
})
export class AssessmentStatisticalSummaryComponent {
  @Input()
  registryId = '';

  constructor(private assessmentService: AssessmentService) {
  }

  resIn: boolean = false;
  list: { favorite: number, recommend: number }[] = [];

  mentions = 0;
  favoriteSum = 0;
  recommendSum = 0;

  ngOnInit(): void {
    this.assessmentService.registry(this.registryId).subscribe(res => {
      this.list = res;
      this.resIn = true;
      this.showStadistics();

    })
  }

  showStadistics() {
    this.mentions = this.list.length;
    let fav = 0;
    let rec = 0;
    this.list.forEach(elem => {
      fav += elem.favorite;
      rec += elem.recommend
    });

    this.favoriteSum += fav / this.mentions;
    this.recommendSum += rec / this.mentions;

  }

}
