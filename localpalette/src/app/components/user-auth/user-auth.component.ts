import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service"
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  email:string;
  password : string;
  constructor(public authenticationservise:AuthService){}

  SignUp(){
    this.authenticationservise.SignUp(this.email,this.password);
    this.email='';
    this.password= '';
  }
  SignIn(){
    this.email ='';
    this.password ='';
  }

  SignOut(){
    this.authenticationservise.SignOut();
  }

  ngOnInit(): void {
  }

}

