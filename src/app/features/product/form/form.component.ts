import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      imageUrl: '',
      department: '',
      price: ['', [Validators.required]],
      comment: ''
    });
  }

  submit(event: Product): void {
    this.productsService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
