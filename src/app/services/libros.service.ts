import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  librosSubject = new Subject();
  
  private libros = [
    {
      titulo: 'El señor de los anillos',
      editorial: 'Minotauro',
      autor: 'J.R.R. Tolkien',
    },
    {
      titulo: 'El hobbit',
      editorial: 'Minotauro',
      autor: 'J.R.R. Tolkien',
    }
  ];

  public addLibro(libro: any) {
    this.libros.push(libro);
    this.librosSubject.next();
  }

  public deleteLibro(libro: any) {
    this.libros = this.libros.filter((l) => l !== libro);
    this.librosSubject.next();
  }

  public getLibros() {
    return [...this.libros];
  }
  constructor() { }
}
