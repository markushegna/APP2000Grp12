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
export class BrukerRatingComponent implements OnInit {
  @Input() brukerId;
  @Input() bedriftId;
  bId: string;
  stjerner: Observable<any>;
  avgRating: Observable<any>;
  kId: string;
  brId: string;

  constructor(private afs: AngularFirestore, private stjerneService: StjerneService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.kId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bId = this.afs.collection('yrke').doc(this.kId).ref.id;
    this.stjerner = this.stjerneService.getBedriftStjerner(this.bId);

    this.avgRating = this.stjerner.pipe(map(arr => {
      const ratings = arr.map(v => v.value);
      return ratings.length > 0 ? ratings.reduce((total, val) => total + val) / arr.length : 'Ingen stjerner'
    }))
  }

  stjerneHandler(value) {
    this.stjerneService.setStjerne(BrukerRatingComponent.getUid(), this.bId, value).then(r => console.log(r))
  }

  private static getUid() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user !== null && user.emailVerified !== false) {
      return user.uid;
    }
  }
}
