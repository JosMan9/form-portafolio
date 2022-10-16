import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFormComponent } from './proyectos-form.component';

describe('ProyectosFormComponent', () => {
  let component: ProyectosFormComponent;
  let fixture: ComponentFixture<ProyectosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
