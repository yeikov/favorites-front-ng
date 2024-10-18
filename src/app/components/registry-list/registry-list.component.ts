import { Component, OnInit, Input } from '@angular/core';
import { RegistryService } from '../../services/registry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.css']
})
export class RegistryListComponent implements OnInit {

  @Input()
  media = '';

  @Input()
  assessment = '';

  constructor(
    private registryService: RegistryService,
    private router: Router
  ) { }

  resIn: boolean = false;
  list: any;

  ngOnInit(): void {
    if (this.assessment == 'recommend') {
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
    console.log(registry);
    this.router.navigate(['registry/' + registry.id])
  }

}
