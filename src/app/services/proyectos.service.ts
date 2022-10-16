import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { map, Observable } from 'rxjs';
import { ProyectoModel } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyectoColeccion: AngularFirestoreCollection<ProyectoModel>;
  tproyectoDoc: AngularFirestoreDocument<ProyectoModel>;
  proyectos: Observable<ProyectoModel[]>;
  proyecto: Observable<ProyectoModel>;

  constructor(private db: AngularFirestore) {
    this.proyectoColeccion = db.collection(`proyectos`, ref => ref.orderBy('nombre', 'asc'));
   }

   getProyectos(): Observable<ProyectoModel[]> {
    this.proyectos = this.proyectoColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map( accion => {
          const datos = accion.payload.doc.data() as ProyectoModel;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );

    return this.proyectos;
   }

   getProyecto(id: string) {
    this.tproyectoDoc = this.db.doc<ProyectoModel>(`proyectos/${id}`);
    this.proyecto = this.tproyectoDoc.snapshotChanges().pipe(
      map (accion => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as ProyectoModel;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );

    return this.proyecto;
   }

   agregarProyecto(proyecto: ProyectoModel) {
    this.proyectoColeccion.add(proyecto);
   }

   modificarProyecto(proyecto: ProyectoModel) {
    this.tproyectoDoc = this.db.doc(`proyectos/${proyecto.id}`);
    this.tproyectoDoc.update(proyecto);
   }

   eliminarProyecto(proyecto: ProyectoModel) {
    this.tproyectoDoc = this.db.doc(`proyectos/${proyecto.id}`);
    this.tproyectoDoc.delete();
   }
}
