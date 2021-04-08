import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userInfo={
    username:'vuduchai',
    password:'123456',
    rememberMe: true,
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log(form);
  }

}
