import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/core/model/Person';
import { PeopleService } from 'src/app/core/services/people/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.min(18), Validators.max(80)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  submit(event: Person): void {
    this.peopleService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
