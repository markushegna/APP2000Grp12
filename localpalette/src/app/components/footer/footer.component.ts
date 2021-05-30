import {Component, OnInit} from '@angular/core';
import {TranslateComponent} from '../translate/translate.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public translate: TranslateComponent
  ) {
  }

  ngOnInit(): void {
  }

}
