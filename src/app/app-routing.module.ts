import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiasTableComponent } from './components/tecnologias-table/tecnologias-table.component';
import { ProyectosTableComponent } from './components/proyectos-table/proyectos-table.component';
import { TecnologiasFormComponent } from './components/tecnologias-form/tecnologias-form.component';
import { ProyectosFormComponent } from './components/proyectos-form/proyectos-form.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {
    path: 'tecnologias', component: TecnologiasTableComponent, children: [
      {
        path: 'formulario', component: TecnologiasFormComponent
      }
    ]
  },
  {
    path: 'proyectos', component: ProyectosTableComponent, children: [
      {
        path: 'formulario', component: ProyectosFormComponent
      }
    ]
  },
  {
    path: '**', component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
