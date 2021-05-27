import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LeafletMap} from "./leaflet-map";
import * as Leaflet from 'leaflet';
import {Observable} from "rxjs";
import {StjerneService} from "../../service/stjerne.service";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {BedriftService} from "../../service/bedriftservice.service";
import {ActivatedRoute} from "@angular/router";
import {LatLng, latLng} from "leaflet";

const mapView = {
  //coords: this.getLocation(),
  name: 'Her er du'
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
  bedriftId: string;
  name:string;
  adresse: string;
  mobilnummer: string;
  apningstidHverdag:string
  apningsHelg: string;
  bedriftnavn : string;
  katId:string;
  omOss: string;

  constructor(private afs: AngularFirestore, private stjerneService: StjerneService, private bedriftService: BedriftService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.brukerDoc = this.afs.collection('users').doc('msRVGfkdhtNjvCcYBLd3YwcX0hB3');
    const docID = this.activatedRoute.snapshot.paramMap.get('bedid');
    console.log(docID)
    this.katId=this.activatedRoute.snapshot.params["katid"]
    this.bedriftnavn=this.activatedRoute.snapshot.params["bedid"]
    this.bedriftDoc = this.afs.collection('yrke').doc(docID);
    this.bedrift = this.bedriftDoc.valueChanges();
    this.bruker = this.brukerDoc.valueChanges();
    console.log(this.katId)
    this.afs.collection('kategorier').doc(this.katId).collection('yrke')
      .ref
      .where('name', '==', docID)
      .get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          snapshot.docs.forEach(doc => {
            this.adresse = doc.data().location;
            this.mobilnummer = doc.data().mobile;
            this.apningstidHverdag = doc.data().åpningsTiderHverdag;
            this.apningsHelg = doc.data().åpningsTiderHelg;
            this.omOss = doc.data().omOss;
            console.log(this.adresse)
          })
        })
      })
  }
  getBedriftId(){
    return this.bedriftDoc.ref.id;
  }

  getBrukerId(){
    return this.brukerDoc.ref.id;
  }

  ngAfterViewInit(): void {
    this.map = new LeafletMap('map');
    const coords = this.getLocation()
    //new LatLng(coords.lat, coords.lng);
    this.map.setCoords(coords.lat, coords.lng, 'Her er du');
  }

  getLocation(): any {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat, lng);
      return new LatLng(lat, lng);
    });
  }
}
