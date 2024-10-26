import { Component, OnInit, Input } from '@angular/core';
import { RegistryService } from '../registry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-list',
  standalone: true,
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.css']
})
export class RegistryListComponent implements OnInit {
  @Input()
  listLite = true;

  @Input()
  media = '';

  @Input()
  assessment = '';

  constructor(
    private registryService: RegistryService,
    private router: Router
  ) {
    
   }

   ngOnInit(): void {
    this.getRegistries();
   }

  resIn: boolean = false;
  list: any;

  getRegistries(): void {

    if (this.assessment === 'recommend') {
      this.registryService.topRecommend(this.media).subscribe((res: any) => {
        this.list = res;
        this.resIn = true;
      })

    } else {
      this.registryService.topFavorite(this.media).subscribe((res: any) => {
        this.list = res;
        this.resIn = true;
      })
    }

  }

  item(registry: any) {
    this.router.navigate(['registry/' + registry.id])
  }


  
  filterMedia(media: string) {
    this.media = media;
    this.getRegistries();
    
  }
  
  filterAssestment(assessment: string) {
    this.assessment = assessment;
    this.getRegistries();
  }


}
