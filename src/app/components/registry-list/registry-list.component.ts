import { Component, OnInit, Input } from '@angular/core';
import { RegistryService } from 'src/app/services/registry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.css']
})
export class RegistryListComponent implements OnInit {

  @Input()
  media: String;

  @Input()
  assessment: String;


  constructor(
    private registryService: RegistryService,
    private router: Router
  ) { }

  resIn:boolean = false;
  res;


  ngOnInit(): void {
    if (this.assessment == 'recommend'){
      this.registryService.topRecommend(this.media).subscribe(res=>{
        this.res = res;
        this.resIn = true;
      })
      
    } else {
        this.registryService.topFavorite(this.media).subscribe(res=>{
          this.res = res;
          this.resIn = true;
        })
    }

  }

  item (registry) {
    console.log(registry);
      this.router.navigate(['registry/'+ registry.id])
  }


}
