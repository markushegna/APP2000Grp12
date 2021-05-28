/*
* @Author: Kim Andre
* */


import { Component, OnInit } from '@angular/core';
import {KategoriService} from "../../service/kategori.service";
import {Observable} from "rxjs";
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/firestore";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {
  kategorier: string;
  kategori: string;
  test: object;
  kategoriTab: Array<object>;

  /*
  * Tar inn KategoriServer og bruker metoden hentKategorier()
  * */
  constructor(private katService: KategoriService) { }


  /*
  * Eg subscriber på metoden hentkategorier for å observere informasjonen i databasen.
  * Metoden vil aldri hente ut. Den vil bare mota informasjon basert på forandring i servicefila.
  * */
  ngOnInit(): void {

    this.katService.hentKategorier().subscribe(value =>{
      this.kategoriTab = value;
      console.log(this.kategoriTab)
    });
  }
}
