import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/service/auth.service';
import {TranslateComponent} from '../translate/translate.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor
  (
    public auth: AuthService,
    public rout: Router,
    public translate: TranslateComponent
  ) {
  }

  ngOnInit(): void {

  }

}
