import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  formEntity: FormGroup;

  @Input()
  formSecondEntity: FormGroup;

  @Output()
  submit = new EventEmitter();

  keys: string[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.formEntity.value).filter(
      (key) => key !== 'id'
    );

    this.activatedRoute.data.subscribe((value) => {
      if (value.entity) {
        this.formEntity.patchValue(value.entity);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  clickOnSubmit(): void {
    console.log(this.formEntity.value)
    if (this.formEntity.valid) {
      this.submit.emit(this.formEntity.value);
    }
  }

  searchZip() {
    const zipCode = this.formEntity.value['address']['zipCode']
    this.httpClient.get(`https://viacep.com.br/ws/${zipCode}/json/`).subscribe(value => {
      this.formEntity.patchValue({address: {city: value['localidade']}})
    })
  }
}
