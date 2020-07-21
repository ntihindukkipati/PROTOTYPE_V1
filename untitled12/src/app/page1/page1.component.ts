import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LandingPageComponent} from '../landing-page/landing-page.component';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) {}

  // tslint:disable-next-line:variable-name
  landing_page: boolean;
  procedures: boolean;
  // tslint:disable-next-line:variable-name
  home_page: boolean;
  users: boolean;
  // tslint:disable-next-line:variable-name
  new_patient: boolean;
  payer: boolean;
  ngOnInit() {
    this.home_page = true;
  }
/*  'landing', component: LandingPageComponent},
{path: 'procedures'*/
  Landing() {
    this.landing_page = true;
    this.procedures = false;
    this.home_page = false;
    this.users = false;
    this.payer = false;
    this.new_patient = false;
  }
  Procedures() {
    this.landing_page = false;
    this.procedures = true;
    this.home_page = false;
    this.users = false;
    this.payer = false;
    this.new_patient = false;
  }
  home() {
    this.home_page = true;
    this.landing_page = false;
    this.procedures = false;
    this.users = false;
    this.payer = false;
    this.new_patient = false;
  }
  Users() {
    this.home_page = false;
    this.landing_page = false;
    this.procedures = false;
    this.users = true;
    this.payer = false;
    this.new_patient = false;
  }
  Payer() {
    this.home_page = false;
    this.landing_page = false;
    this.procedures = false;
    this.users = false;
    this.payer = true;
    this.new_patient = false;
  }
  NewPatient() {
    this.home_page = false;
    this.landing_page = false;
    this.procedures = false;
    this.users = false;
    this.payer = false;
    this.new_patient = true;
  }

}
