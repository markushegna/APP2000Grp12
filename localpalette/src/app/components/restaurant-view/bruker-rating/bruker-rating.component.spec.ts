import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrukerRatingComponent } from './bruker-rating.component';

describe('BrukerRatingComponent', () => {
  let component: BrukerRatingComponent;
  let fixture: ComponentFixture<BrukerRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrukerRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrukerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
