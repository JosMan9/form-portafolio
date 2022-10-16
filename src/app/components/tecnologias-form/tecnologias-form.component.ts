import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TecnologiaModel } from '../../model/tecnologia.model';
import { TecnologiasService } from '../../services/tecnologias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tecnologias-form',
  templateUrl: './tecnologias-form.component.html',
  styleUrls: ['./tecnologias-form.component.scss'],
})
export class TecnologiasFormComponent implements OnInit {
  tecnologias: TecnologiaModel[] = [];
  tecnologia: TecnologiaModel = {
    nombre: '',
    imagen: '',
  };
  nombre = '';
  imagen = '';
  @ViewChild('tecForm') tecForm: NgForm;

  id: string;

  constructor(
    private tecService: TecnologiasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id == null) {
    } else {
      this.tecService.getTec(this.id).subscribe((tec) => {
        this.tecnologia = tec;
      });
    }
  }

  agregar(tecForm: NgForm) {
    if (!tecForm.valid) {
      alert('Por favor, llena los datos correctamente');
    } else {
      if (this.id == null) {
        this.tecService.agregarTec(tecForm.value);
        this.tecForm.resetForm();
      } else {
        tecForm.value.id = this.id;
        this.tecService.modificarTec(tecForm.value);
        this.router.navigate(['/tecnologias']);
      }
    }
  }

  eliminar(tecForm: NgForm) {
    if (this.tecForm.valid) {
      if (this.id != null) {
        tecForm.value.id = this.id;
        this.tecService.eliminarTec(tecForm.value);
        this.router.navigate(['/tecnologias']);
      } else {
        alert('Faltan datos');
      }
    } else {
      alert('Por favor, llena los datos correctamente');
    }
  }
}
