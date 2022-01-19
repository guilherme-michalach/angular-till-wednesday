import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[];

  @Output()
  deleteEntity = new EventEmitter();

  @Output()
  searchEntity = new EventEmitter();

  entities: any[];
  keys: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value: any) => {
      this.entities = value.entities;
    });

    this.keys = Object.keys(this.entities[0]);
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

  private setEntities(entities) {
    this.entities = entities;
  }
}
