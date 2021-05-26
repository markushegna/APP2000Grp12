import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LeafletMap} from "./leaflet-map";
import * as Leaflet from 'leaflet';
import {Observable} from "rxjs";
import {StjerneService} from "../../service/stjerne.service";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {BedriftService} from "../../service/bedriftservice.service";
import {ActivatedRoute} from "@angular/router";

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
  rating: Observable<any>;
  avgRating: Observable<any>;

  map: LeafletMap;
  brukerDoc: AngularFirestoreDocument<any>
  bedriftDoc: AngularFirestoreDocument<any>
  bruker: Observable<any>;
  bedrift: Observable<any>
  docId: string;

  constructor(private afs: AngularFirestore, private stjerneService: StjerneService, private bedriftService: BedriftService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.brukerDoc = this.afs.collection('users').doc('msRVGfkdhtNjvCcYBLd3YwcX0hB3');
    const docID = this.activatedRoute.snapshot.paramMap.get('id');
    this.bedriftDoc = this.afs.collection('yrke').doc(docID);
    this.bedrift = this.bedriftDoc.valueChanges();
    this.bruker = this.brukerDoc.valueChanges();

  }
  getBedriftId(){
    return this.bedriftDoc.ref.id;
  }

  getBrukerId(){
    return this.brukerDoc.ref.id;
  }
/*
  rateBedrift(val: number) {
    console.log(val)
    this.stjerneService.setRating({
      bedriftId: this.valgtBedriftsId,
      ratingValue: val
    })
*/



  //}


  ngAfterViewInit(): void {
    this.map = new LeafletMap('map');

    this.map.setCoords(mapView.coords.lat, mapView.coords.lng, mapView.name);
  }

}
