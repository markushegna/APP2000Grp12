import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisorsalongerComponent } from './frisorsalonger.component';

describe('FrisorsalongerComponent', () => {
  let component: FrisorsalongerComponent;
  let fixture: ComponentFixture<FrisorsalongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisorsalongerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisorsalongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
