import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  linkOptions = ['', 'people/form', 'people', 'address/form', 'address/', 'help/we', 'help/questions'];

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

  }

  goToProductForm() {

  }

  goToHelp() {

  }

  goToHelpQuestions() {

  }

}
