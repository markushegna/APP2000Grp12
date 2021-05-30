import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service"
import "../style/style.component.scss";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style/style.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
  ) {
  }

  ngOnInit() {

    if (this.auth.isLoggedIn) {
      this.router.navigate(["/brukerDash"])
    }
  }

}
