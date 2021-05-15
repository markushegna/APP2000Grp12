import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LeafletMap} from "./leaflet-map";
import * as Leaflet from 'leaflet';

const mapView = {
  coords: new Leaflet.LatLng(59.41310, 9.06370),
  name: 'Popup laget'
};

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})
export class RestaurantViewComponent implements OnInit, AfterViewInit {

  map: LeafletMap;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.map = new LeafletMap('map');

    this.map.setCoords(mapView.coords.lat, mapView.coords.lng, mapView.name);
  }

}
