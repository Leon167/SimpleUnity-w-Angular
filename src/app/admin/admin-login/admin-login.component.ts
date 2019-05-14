import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formModel = {
    Email : '',
    Password : ''
  }

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-gradient-primary');
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log(this.formModel.Email);
  }

}
