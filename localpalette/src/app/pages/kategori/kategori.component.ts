import { Component, OnInit } from '@angular/core';
import {KategoriService} from "../../service/kategori.service";

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  submitFilter(searchInput: HTMLInputElement) {

  }
}
