/*
* @Author: Kim Andre
* */

import {Component, OnInit} from '@angular/core';
import {RestaurantInfoService} from "../../service/restaurant-info.service";
import {ActivatedRoute} from "@angular/router";
import {KategoriService} from "../../service/kategori.service";

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.scss']
})
export class InfocardsComponent implements OnInit {
  restaurantId: string;
  tittel: string;
  katId: string;
  tittelTab: Array<object>
  restauranter: Array<object>;

  constructor(private restaurantService: RestaurantInfoService, private activatedRoute: ActivatedRoute, private katService: KategoriService) {
  }

  ngOnInit(): void {
    this.katId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.katId);
    this.restaurantService.visAlleKategorier(this.katId).subscribe(value => {
      this.restauranter = value;
    })
  }
}
