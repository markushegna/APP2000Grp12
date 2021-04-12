import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nb']);
    translate.setDefaultLang('nb');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
   

  ngOnInit(): void {
  }

}
