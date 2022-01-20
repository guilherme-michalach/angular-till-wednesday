import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  dummies: string[] = ['Lorem ipsum dolor sit amet, consectet? R: Lorem.'];
  headerNumbers: string[] = ['1° - ', '2° - ', '3° - ', '4° - ', '5° - ', '6° - ', '7° - '];
  numbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
