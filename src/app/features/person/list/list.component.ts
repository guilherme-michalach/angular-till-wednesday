import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['id', 'name', 'age', 'email', 'phone', 'address'];

  // headers: string[] = ['id', 'name', 'age', 'email', 'phone', 'address', 'options'];


  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

}
