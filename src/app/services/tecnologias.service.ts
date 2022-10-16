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
  tec: Observable<TecnologiaModel>;

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

  getTec(id: string) {
    this.tecDoc = this.db.doc<TecnologiaModel>(`tecnologias/${id}`);
    this.tec = this.tecDoc.snapshotChanges().pipe(
      map( accion => {
        if(accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as TecnologiaModel;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.tec;

  }

  agregarTec(tec: TecnologiaModel) {
    this.tecColeccion.add(tec);
  }

  modificarTec(tec: TecnologiaModel) {
    this.tecDoc = this.db.doc(`tecnologias/${tec.id}`);
    this.tecDoc.update(tec);
  }

  eliminarTec(tec: TecnologiaModel) {
    this.tecDoc = this.db.doc(`tecnologias/${tec.id}`);
    this.tecDoc.delete();
  }
}
