import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  headers: string[] = [
    'id',
    'imageUrl',
    'name',
    'department',
    'price',
    'comment',
  ];

  products: Product[] = [];
  keys: string[];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.all().subscribe((value) => {
      this.products = value;
    })
  }

  goToAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

}
