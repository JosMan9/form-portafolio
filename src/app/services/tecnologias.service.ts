import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { map, Observable } from 'rxjs';
import { TecnologiaModel } from '../model/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {
  tecColeccion: AngularFirestoreCollection<TecnologiaModel>;
  tecDoc: AngularFirestoreDocument<TecnologiaModel>;
  tecs: Observable<TecnologiaModel[]>;

  constructor(private db: AngularFirestore) {
    this.tecColeccion = db.collection(`tecnologias`, ref => ref.orderBy('nombre', 'asc'));
   }

  getTecs(): Observable<TecnologiaModel[]> {
    this.tecs = this.tecColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map( accion => {
          const datos = accion.payload.doc.data() as TecnologiaModel;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );

    return this.tecs;
  }
}
