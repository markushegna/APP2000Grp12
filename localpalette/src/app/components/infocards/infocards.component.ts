/*
* @Author: Kim Andre
*
* Det denne klassa skal gjøre er å hente ut alle bedrifter som i ligger i den spesifikke kategorien
* i databasen. Den bruker ulike service filer og henter.
* Videre henter eg ut verdien som brukerene har gitt bedriftene for å rekne utsnittet
* og vise de ved siden av tittelen
* */

import {Component, OnInit} from '@angular/core';
import {RestaurantInfoService} from "../../service/restaurant-info.service";
import {ActivatedRoute} from "@angular/router";
import {StjerneService} from "../../service/stjerne.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.scss']
})
export class InfocardsComponent implements OnInit {
  /*
   * Variablene som er valt er
   *
   * kategorier: Inneholder alle kategori objekter fra databasen
   * katId: Id'en til kategorien som brukeren trykte på
   * stjerner: Er en Observable array med alle typer objekter inni.
   *  Den inneholder alle stjernene som brukerene har gitt bedriften
   * avgRating: er en Observable array som inneholder gjennomsnittet til
   *  bedriftene med bruk av stjernene som ble gitt til bedriften
   */
  kategorier: Array<object>;
  katId: string;
  bedrifter: Array<object>;
  stjerner: Observable<any>;
  avgRating: Observable<any>
  bedriftNavn: string[];

  /*
   * Denne konstruktøren tar i mot fire klasser og ved hjelp av Dependency Injection mønsteret
   * trenger eg ikke å sette av minne til å instansiere objektene.
   *
   * RestaurantService - blir brukt til å hente ut bedriftene
   * AngularFirestore - blir brukt til å kommunisere med databasen
   * StjerneService - henter ut stjernene til bedriftene som er gitt av brukere
   * ActivatedRoute - henter ut id'en til pathen som brukeren trykte på. Id'en blir brukt som variabel
   * som sier hvilken kategorie brukeren valgte å trykke på.
   */
  constructor(private restaurantService: RestaurantInfoService,
              public afs: AngularFirestore,
              public stjerneService: StjerneService,
              private activatedRoute: ActivatedRoute) {
  }

  /*
     * Med å bruke Dependency Injection mønsteret kan eg lage et objekt uten å tilegne minne til objektet.
     * Då kan eg hente ut funksjonen "visAlleBedrifter()" som tar inn katId'en som parameter.
     * Metoden "visAlleBedrifter()" returnerer et "observable" objekt som eg kan subscribe på
     * ved hjelp av Observer mønsteret. Den vil putte alle verdiane i ein "Array<object>" som er fylt med objekter.
     * Med Lifecycle metoden onInit() vil eg kunne vise alle bedriftene i den kategorien i databasen.
     * Desse objektene kan eg hente ut i HTML-taggen med å bruke "ngFor" som er ein metode i Angular 2.
     *
     */
  ngOnInit(): void {
    this.katId = this.activatedRoute.snapshot.paramMap.get('katid');

    this.restaurantService.visAlleBedrifter(this.katId).subscribe(value => {
      this.bedrifter = value;
    })
  }

  tekst(tekst: string) {
    return tekst.substring(0, 40);
  }

  storBokstav(tekst: string) {
    if (typeof tekst !== 'string')
      return '';
    return tekst.charAt(0).toUpperCase() + tekst.slice(1);
  }


}
