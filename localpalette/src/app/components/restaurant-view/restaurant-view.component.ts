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
            //console.log("infoTab: " + this.infoTabell);

            //this.infoTabell.replace('"', " ");


            /* this.splittedInfo = JSON.parse("[" + this.infoTabell + "]");
             console.log(this.splittedInfo);*/
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
