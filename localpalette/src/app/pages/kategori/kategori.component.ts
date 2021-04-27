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
  kategori$;
  constructor(private katService: KategoriService, private route: ActivatedRoute, private afs: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.katService.hentKategorier().subscribe(value =>{
      this.kategoriTab = value;
      console.log(this.kategoriTab)
    });

  }


  searchFilter(searchInput:any) {
    const val = searchInput.value;
    console.log(val);
  }

  clicked(searchInput: HTMLInputElement) {
    console.log(searchInput);
  }




  }
