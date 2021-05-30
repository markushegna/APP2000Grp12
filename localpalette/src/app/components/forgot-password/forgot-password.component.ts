import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service"

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../style/style.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authaf: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
