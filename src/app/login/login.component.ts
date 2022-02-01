import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username='sakib'
  password=''

  

  constructor() { }

  ngOnInit(): void {
  }

  handleLogIn(){
    console.log(this.username)
  }

}
