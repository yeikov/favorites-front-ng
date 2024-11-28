import { Component, inject, OnInit } from '@angular/core';
import { ViewerService } from '../viewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer-list',
  standalone: true,
  templateUrl: './viewer-list.component.html',
  styleUrls: ['./viewer-list.component.css']
})
export class ViewerListComponent {

  list: any;
  resIn: boolean = false;
  media = 'ALL';

  constructor(private viewerService: ViewerService,
    private router: Router) {
    this.viewerService.recent(this.media).subscribe((res: any) => {
      this.list = res;
      this.resIn = true;
    });
  }

  item(id: number) {
    this.router.navigate(['viewer/' + id]);
  }
}
