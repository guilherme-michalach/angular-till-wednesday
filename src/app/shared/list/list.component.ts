import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[];

  entities: any[];
  keys: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value: any) => {
      this.entities = value.entities;
    });

    this.keys = Object.keys(this.entities[0]);
  }

}
