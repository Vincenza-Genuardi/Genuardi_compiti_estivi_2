import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneSpartitoComponent } from './gestione-spartito.component';

describe('GestioneSpartitoComponent', () => {
  let component: GestioneSpartitoComponent;
  let fixture: ComponentFixture<GestioneSpartitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneSpartitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneSpartitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
