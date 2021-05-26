/*
* @Author: Kim Andre
* */

import {Component, OnInit, Output} from '@angular/core';
import {RestaurantInfoService} from "../../service/restaurant-info.service";
import {ActivatedRoute} from "@angular/router";
import {KategoriService} from "../../service/kategori.service";

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.scss']
})
export class InfocardsComponent implements OnInit {
  kategorier: Array<object>;
  tittel: string;
  katId: string;
  tittelTab: Array<object>;
  restauranter: Array<object>;

  constructor(private restaurantService: RestaurantInfoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.katId = this.activatedRoute.snapshot.paramMap.get('katid');
    console.log(this.katId);

    this.restaurantService.visAlleKategorier(this.katId).subscribe(value => {
      this.restauranter = value;
    })

  }
}
