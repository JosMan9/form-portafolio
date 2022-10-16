import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiaModel } from '../../model/tecnologia.model';
import { TecnologiasService } from '../../services/tecnologias.service';

@Component({
  selector: 'app-tecnologias-table',
  templateUrl: './tecnologias-table.component.html',
  styleUrls: ['./tecnologias-table.component.scss'],
})
export class TecnologiasTableComponent implements OnInit {
  tecnologias: TecnologiaModel[] = [];
  tecnologia: TecnologiaModel;
  isClick: boolean = false;
  tituloBoton: string = 'Agregar';

  constructor(private tecService: TecnologiasService, private router: Router) {}

  ngOnInit(): void {
    this.tecService.getTecs().subscribe((tecs) => {
      this.tecnologias = tecs;
      console.log(this.tecnologias);
    });
  }

  botonAgregar() {
    if (!this.isClick) {
      this.router.navigate(['/tecnologias/formulario']);
      this.isClick = true;
      this.tituloBoton = 'Ocultar';
    } else {
      this.router.navigate(['/tecnologias']);
      this.isClick = false;
      this.tituloBoton = 'Agregar';

    }
  }
}
