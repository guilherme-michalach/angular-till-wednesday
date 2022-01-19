import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['Id', 'Name', 'Age', 'Email', 'Phone', 'Address', 'Options'];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

}
