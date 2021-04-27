import { Component, OnInit } from '@angular/core';
import { TranslateComponent } from 'src/app/components/translate/translate.component';
import {CommentfieldService} from "../../service/commentfield.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public translate :TranslateComponent
  ) { }

  ngOnInit(): void {
  
  }

}
