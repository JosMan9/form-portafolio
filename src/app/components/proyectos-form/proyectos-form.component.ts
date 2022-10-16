import { Component, OnInit, ViewChild } from '@angular/core';
import { ProyectoModel } from '../../model/proyecto.model';
import { ProyectosService } from '../../services/proyectos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.scss'],
})
export class ProyectosFormComponent implements OnInit {
  proyectos: ProyectoModel[] = [];
  proyecto: ProyectoModel = {
    descripcion: '',
    imagen: '',
    nombre: '',
    tecnologias: [],
  };

  id: string;
  @ViewChild('proyectoForm') proyectoForm: NgForm;

  constructor(
    private proyectoService: ProyectosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.proyectoService.getProyecto(this.id).subscribe((proyecto) => {
        this.proyecto = proyecto;
      });
    }
  }

  agregar(proyec: NgForm) {
    if (!proyec.valid) {
      alert('Por favor, llena los datos correctamente');
    } else {
      if (this.id == null) {
        proyec.value.tecnologias = proyec.value.tecnologias.split(',');
        console.log(proyec.value.tecnologias);
        this.proyectoService.agregarProyecto(proyec.value);
        this.proyectoForm.resetForm();
      } else {
        proyec.value.id = this.id;
        this.proyectoService.modificarProyecto(proyec.value);
        this.router.navigate(['/proyectos']);
      }
    }
  }

  eliminar(proyec: NgForm) {
    if (proyec.valid) {
      if (this.id != null) {
        proyec.value.id = this.id;
        console.log(proyec.value.tecnologias);
        //proyec.value.tecnologias = proyec.value.tecnologias.split(',');
        this.proyectoService.eliminarProyecto(proyec.value);
        this.router.navigate(['/proyectos']);
      } else {
        alert('Flatan datos');
      }
    } else {
      alert('Por favor, llena los datos correctamente');
    }
  }
}
