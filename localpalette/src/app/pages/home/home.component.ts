import { Component, OnInit } from '@angular/core';
import {CommentfieldService} from "../../service/commentfield.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: CommentfieldService) { }

  ngOnInit(): void {

  }

}
