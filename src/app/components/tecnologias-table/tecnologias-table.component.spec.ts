import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasTableComponent } from './tecnologias-table.component';

describe('TecnologiasTableComponent', () => {
  let component: TecnologiasTableComponent;
  let fixture: ComponentFixture<TecnologiasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
