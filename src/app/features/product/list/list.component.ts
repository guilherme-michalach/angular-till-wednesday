import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['id', 'imageUrl', 'name', 'department', 'price ', 'comment'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
}
