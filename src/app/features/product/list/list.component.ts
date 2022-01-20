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

    // this.keys = Object.keys(this.products[0]);
  }

  goToAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

  /*
  headers: string[] = ['id', 'imageUrl', 'name', 'department', 'price', 'comment'];

  @Output()
  deleteEntity = new EventEmitter();

  "<img [src]='ent[header]'>";

  entities: any[];
  keys: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value: any) => {
      this.products = value.products;

    });

    this.keys = Object.keys(this.products[0]);
  }

  goToAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

  editEntity(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  onDeleteEntity(id: number): void {
    const obj = {
      id,
      callback: (entities) => {
        this.setEntities(entities);
      },
    };
    this.deleteEntity.emit(obj);
  }

  private setProduct(entities) {
    this.entities = entities;
  }
}

  */
}
