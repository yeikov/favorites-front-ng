import { Component, Input, Pipe } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { DecimalPipe, NgLocaleLocalization, NumberSymbol } from '@angular/common';
import { Registry } from '../../registries/registry.model';


@Component({
  selector: 'app-assessment-statistical-summary',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './assessment-statistical-summary.component.html',
  styleUrl: './assessment-statistical-summary.component.css'
})
export class AssessmentStatisticalSummaryComponent {
  @Input()
  mentions = 0;
  
  @Input()
  favoriteSum = 0.0;

  @Input()
  recommendSum = 0.0;

  constructor(private assessmentService: AssessmentService) {
  }

  resIn: boolean = false;
  list: { favorite: number, recommend: number }[] = [];

  ngOnInit(): void {

  }

}
