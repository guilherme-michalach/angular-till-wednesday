import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  linkOptions: string[] = ['', 'people/form', 'people/list', 'address/form', 'address/list', 'help/we', 'help/questions'];

  constructor() { }

  ngOnInit(): void {
  }

}
