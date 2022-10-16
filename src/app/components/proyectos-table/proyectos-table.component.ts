import { Component, OnInit } from '@angular/core';
import { ProyectoModel } from '../../model/proyecto.model';
import { ProyectosService } from '../../services/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-table',
  templateUrl: './proyectos-table.component.html',
  styleUrls: ['./proyectos-table.component.scss']
})
export class ProyectosTableComponent implements OnInit {
  proyectos: ProyectoModel[] = [];
  proyecto: ProyectoModel;
  isClick: boolean = false;
  tituloBoton: string = 'Agregar';
  claseIcono: string = 'fas fa-compress';

  constructor(private proyetoSerivce: ProyectosService, private router: Router) { }

  ngOnInit(): void {
    this.proyetoSerivce.getProyectos().subscribe(
      proyectos => {
        this.proyectos = proyectos;
        console.log(this.proyectos);
      }
    );

  }

  botonAgregar() {
    if(!this.isClick) {
      this.router.navigate(['/proyectos/formulario']);
      this.isClick = true;
      this.tituloBoton = 'Ocultar';
      this.claseIcono = 'fas fa-compress-arrows-alt';
    } else {
      this.router.navigate(['/proyectos']);
      this.isClick = false;
      this.tituloBoton = 'Agregar';
      this.claseIcono = 'fas fa-compress';
    }

  }

}
