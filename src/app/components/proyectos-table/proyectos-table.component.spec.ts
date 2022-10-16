import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosTableComponent } from './proyectos-table.component';

describe('ProyectosTableComponent', () => {
  let component: ProyectosTableComponent;
  let fixture: ComponentFixture<ProyectosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
