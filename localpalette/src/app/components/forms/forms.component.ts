import {Component, OnInit} from '@angular/core';
import {TranslateComponent} from '../translate/translate.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(public translate: TranslateComponent) {
  }

  ngOnInit(): void {

  }


}
