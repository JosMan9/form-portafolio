import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnologiasFormComponent } from './components/tecnologias-form/tecnologias-form.component';
import { TecnologiasTableComponent } from './components/tecnologias-table/tecnologias-table.component';
import { ProyectosFormComponent } from './components/proyectos-form/proyectos-form.component';
import { ProyectosTableComponent } from './components/proyectos-table/proyectos-table.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { TecnologiasService } from './services/tecnologias.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TecnologiasFormComponent,
    TecnologiasTableComponent,
    ProyectosFormComponent,
    ProyectosTableComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [TecnologiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
