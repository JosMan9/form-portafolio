import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasFormComponent } from './tecnologias-form.component';

describe('TecnologiasFormComponent', () => {
  let component: TecnologiasFormComponent;
  let fixture: ComponentFixture<TecnologiasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
