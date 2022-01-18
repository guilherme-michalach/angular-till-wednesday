import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address/address.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['Id', 'City', 'State', 'ZipCode'];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

}
