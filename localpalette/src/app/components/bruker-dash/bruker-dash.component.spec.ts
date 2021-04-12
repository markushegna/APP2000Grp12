import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrukerDashComponent } from './bruker-dash.component';

describe('BrukerDashComponent', () => {
  let component: BrukerDashComponent;
  let fixture: ComponentFixture<BrukerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrukerDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrukerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
