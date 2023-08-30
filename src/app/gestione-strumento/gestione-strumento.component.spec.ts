import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneStrumentoComponent } from './gestione-strumento.component';

describe('GestioneStrumentoComponent', () => {
  let component: GestioneStrumentoComponent;
  let fixture: ComponentFixture<GestioneStrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneStrumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneStrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
