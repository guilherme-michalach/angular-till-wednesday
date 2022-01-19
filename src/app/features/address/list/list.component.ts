import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address/address.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headers: string[] = ['CEP', 'Logradouro', 'Complemento', 'Bairro', 'Localidade', 'UF', 'IBGE', 'GIA', 'DDD', 'SIAFI'];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  getCity(cep: number) {
    this.addressService.getOne(cep).subscribe((value) => {
      return console.log(value.localidade);
    })
  }

}
