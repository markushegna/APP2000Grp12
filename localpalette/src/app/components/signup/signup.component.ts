import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service"
import {TranslateComponent} from '../translate/translate.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../style/style.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    public afAuth: AuthService,
    public translate: TranslateComponent
  ) {
  }

  ngOnInit(): void {
  }

}
