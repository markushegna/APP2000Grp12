import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranterComponent } from './restauranter.component';

describe('RestauranterComponent', () => {
  let component: RestauranterComponent;
  let fixture: ComponentFixture<RestauranterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
