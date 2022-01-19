import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  linkOptions: string[] = ['', 'people/form', 'people/list', 'address/form', 'address/list', 'help/we', 'help/questions'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToClientList() {
    this.router.navigate(['people/list'], { relativeTo: this.activatedRoute });
  }

}
