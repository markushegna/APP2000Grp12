import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {StjerneService} from "../../../service/stjerne.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-bruker-rating',
  templateUrl: './bruker-rating.component.html',
  styleUrls: ['./bruker-rating.component.scss']
})

/*
 * Author: Kim Andre Undal
 * Oppgava til denne klassa er å ta seg av vurdering som brukeren vil gi til bedriften i form av stjerner.
 */
export class BrukerRatingComponent implements OnInit {
  /*
   * Oppgavene til variablene:
   * bId - lagrer bedrift id'en etter at brukeren har trykt på bedriften i infocard-komponenten
   * stjerner - Er en Observable array med alle typer objekter inni.
   *  Den inneholder alle stjernene som brukerene har gitt bedriften
   * avgRating - er en Observable array som inneholder gjennomsnittet til
   *  bedriftene med bruk av stjernene som ble gitt til bedriften
   * kId - lagrer id'en til et dokument etter at bruker har trykket på den
   *
   */
  bId: string;
  stjerner: Observable<any>;
  avgRating: Observable<any>;
  kId: string;

  /*
 * Denne konstruktøren tar i mot tre klasser og ved hjelp av Dependency Injection mønsteret
 * trenger eg ikke å sette av minne til å instansiere objektene.
 *
 * AngularFirestore - blir brukt til å kommunisere med databasen
 * StjerneService - henter ut stjernene til bedriftene som er gitt av brukere
 * ActivatedRoute - henter ut id'en til pathen som brukeren trykte på. Id'en blir brukt som variabel
 * som sier hvilken kategorie brukeren valgte å trykke på.
 */
  constructor(private afs: AngularFirestore,
              private stjerneService: StjerneService,
              private activatedRoute: ActivatedRoute) {
  }

  /*
   * Denne metoden vil hente ut verdien som brukerene har gitt til bedriften.
   * Den vil regne ut gjennomsnittet og gi den til variabelen "this.avgRating" for å
   * senere vise den i html fila.
   */
  ngOnInit(): void {
    this.kId = this.activatedRoute.snapshot.paramMap.get('bedid');
    this.bId = this.afs.collection('yrke').doc(this.kId).ref.id;
    this.stjerner = this.stjerneService.getBedriftStjerner(this.bId);

    this.avgRating = this.stjerner.pipe(map(arr => {
      const ratings = arr.map(v => v.value);
      return ratings.length > 0 ? ratings.reduce((total, val) => total + val) / arr.length : 'Ingen stjerner'
    }))
  }

  /*
   * Denne metoden tar i mot et parameter som er value som er et tall.
   * Denne metoden lagrer brukernavnet, bedriftnavnet som id og value som blir verdien
   * som brukeren har gitt til bedriften.
   *
   * Navnet er hardkodet fordi det å logge inn via google+ fungerer ikkje.
   * Når det fungerer vil den hente brukernavnet som ligger i Localstorage og bruket det i stedenfor
   */
  stjerneHandler(value) {
    this.stjerneService.setStjerne(
      //BrukerRatingComponent.getUid()
      'kimaa', this.bId, value).then(r => console.log(r))
  }

  /*
   * Denne metoden henter ut brukernavnet som er lagret i Localstorage
   */
  /* private static getUid() {
     const user = JSON.parse(localStorage.getItem('user'));
     if(user !== null && user.emailVerified !== false) {
       return user.uid;
     }
   }*/


}
