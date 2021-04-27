import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriviewComponent } from './kategoriview.component';

describe('KategoriviewComponent', () => {
  let component: KategoriviewComponent;
  let fixture: ComponentFixture<KategoriviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
