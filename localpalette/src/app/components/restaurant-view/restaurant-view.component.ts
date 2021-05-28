import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LeafletMap} from "./leaflet-map";
import * as Leaflet from 'leaflet';
import {Observable} from "rxjs";
import {StjerneService} from "../../service/stjerne.service";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {BedriftService} from "../../service/bedriftservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})

  /*
   * Author: Kim Andre & Markus
   * Oppgava til denne klassa er å vise informasjonen til dei registrerte bedriftene
   *
   */
export class RestaurantViewComponent implements OnInit, AfterViewInit {

  /*
  * map - inneholder metoder til klassen LeafletMap, og viser kartet og markøren som viser hvor bedriften holder til
  *
  * */
  map: LeafletMap;
  /*
  * avgRating - inneholder gjennomsnittet til med stjerner til bedriftene som brukeren trykker på
  * brukerDoc - inneholder informasjon om dokumentet til brukeren
  * bedriftDoc - inneholder informasjon om dokumentet til bedriften
  * bruker - tar vare på forandringene til brukeren i ein observable
  * bedrift - tar vare på forandringene til bedriften i ein observable
  * docId - er id'en til dokumentet
  * bedriftId - er id'en til bedriften i dokumentet
  * */
  avgRating: Observable<any>;
  brukerDoc: AngularFirestoreDocument<any>
  bedriftDoc: AngularFirestoreDocument<any>
  bruker: Observable<any>;
  bedrift: Observable<any>
  docId: string;
  bedriftId: string;
  lat: number;
  lng: number;

  /*
   * Alle desse variablene inneholder informasjon om bedriften
   */
  name:string;
  adresse: string;
  mobilnummer: string;
  apningstidHverdag:string
  apningsHelg: string;
  bedriftnavn : string;
  katId:string;
  omOss: string;
  /*
    * Denne konstruktøren tar i mot fire klasser og ved hjelp av Dependency Injection mønsteret
    * trenger eg ikke å sette av minne til å instansiere objektene.
    *
    * AngularFirestore - blir brukt til å kommunisere med databasen
    * StjerneService - henter ut stjernene til bedriftene som er gitt av brukere
    * BedriftService - blir brukt til å hente ut bedriftene
    * ActivatedRoute - henter ut id'en til pathen som brukeren trykte på. Id'en blir brukt som variabel
    * som sier hvilken kategorie brukeren valgte å trykke på.
    */

  constructor(private afs: AngularFirestore,
              private stjerneService: StjerneService,
              private bedriftService: BedriftService,
              private activatedRoute: ActivatedRoute) {
  }

  /*
  * Metoden henter
  * */

  /*
  * Denne metoden henter ut bedriftsId'en og putter den i docId variabelen.
  * Den henter også kategoriId'en til katId variabelen. Som skal bli brukt til å finne riktig dokument
  * for å hente ut informasjon om bedrifta.
  * Den sjekker også for valueChanges som blir gjort til dokumentet for å
  * */
  ngOnInit(): void {

    const docID = this.activatedRoute.snapshot.paramMap.get('bedid');
    console.log(docID)
    this.katId=this.activatedRoute.snapshot.params["katid"]
    this.bedriftnavn=this.activatedRoute.snapshot.params["bedid"]
    this.bedriftDoc = this.afs.collection('yrke').doc(docID);
 /*   this.bedrift = this.bedriftDoc.valueChanges();
    this.bruker = this.brukerDoc.valueChanges();*/
    console.log(this.katId)
    /*
    * Dette vil hente ut informasjon om bedrifta med å søke etter kategoriId og docID som blir bedriftId'en.
    * */
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
            this.lat = doc.data().lat;
            this.lng = doc.data().lng;
            const lat = this.lat;
            const lng = this.lng;

            console.log(lat , lng);

            const mapView = {
              coords: new Leaflet.LatLng(lat, lng),
              name: `${docID}`
            };
            this.map = new LeafletMap('map');

            this.map.setCoords(mapView.coords.lat, mapView.coords.lng, mapView.name);
          })
        })
      })



  }




  ngAfterViewInit(): void {

  }

}
