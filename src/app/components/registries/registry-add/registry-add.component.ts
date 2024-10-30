import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Registry } from '../registry.model';
import { RegistryService } from '../registry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registry-add.component.html',
  styleUrl: './registry-add.component.css'
})
export class RegistryAddComponent {
  constructor(private registryService: RegistryService,

    private router: Router,
  ) { }

  registry = new Registry();

  registryForm = new FormGroup({
    media: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.min(-10000), Validators.max(2999),  Validators.pattern("^-?[0-9]*$"),])
  });

  handleSubmit() {
    this.registryService.add(this.registryForm.value.title || '', this.registryForm.value.media || '', this.registryForm.value.author || '', this.registryForm.value.year || '').subscribe(
      (res: Registry) => {
        this.goForward(res.id)
      }
    )

  }

  cancel() {
    this.goBack();
  }

  submitResponse(res: Registry) {
    if (res)
      this.goForward(res.id);
  }

  goBack() {
    this.router.navigate(['registries/'])
  }

  goForward(newId: number | string) {
    this.router.navigate(['registries/' + newId])
  }
}

