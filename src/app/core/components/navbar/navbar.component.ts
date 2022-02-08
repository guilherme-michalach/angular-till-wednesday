import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  linkOptions: string[] = ['', 'people/form', 'people', 'address/form', 'address/', 'help/we', 'help/questions'];

  labels: string[] = ['Home', 'Clients', 'Products', 'Help'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToStart() {
    this.router.navigate(['home'], { relativeTo: this.activatedRoute });
  }

  goToClientForm() {
    this.router.navigate(['people/add']);
  }

  goToClientList() {
    this.router.navigate(['people']);
  }

  goToProductList() {
    this.router.navigate(['products']);
  }

  goToProductForm() {
    this.router.navigate(['products/add']);
  }

  goToHelp() {
    this.router.navigate(['help']);
  }

  goToHelpQuestions() {

  }

}
