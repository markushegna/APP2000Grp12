import { Component, OnInit ,NgZone } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bruker-dash',
  templateUrl: './bruker-dash.component.html',
  styleUrls: ['../style/style.component.scss']

})
export class BrukerDashComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
