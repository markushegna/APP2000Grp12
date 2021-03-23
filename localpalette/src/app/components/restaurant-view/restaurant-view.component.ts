import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})
export class RestaurantViewComponent implements OnInit {

  val: number = 3;

  constructor() { }

  ngOnInit(): void {

  }

}
