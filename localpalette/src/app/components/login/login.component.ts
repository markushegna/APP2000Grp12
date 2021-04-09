import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service"
import "../style/style.component.scss";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style/style.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
