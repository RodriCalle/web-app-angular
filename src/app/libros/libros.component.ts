import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros = [
    {
      titulo: 'El señor de los anillos',
      autor: 'J.R.R. Tolkien',
      editorial: 'Minotauro',
    },
    { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', editorial: 'Minotauro' },
    {
      titulo: 'El silmarillion',
      autor: 'J.R.R. Tolkien',
      editorial: 'Minotauro',
    },
    {
      titulo: 'El nombre del viento',
      autor: 'Patrick Rothfuss',
      editorial: 'Plaza & Janés',
    },
    {
      titulo: 'El temor de un hombre sabio',
      autor: 'Patrick Rothfuss',
      editorial: 'Plaza & Janés',
    },
    {
      titulo: 'El imperio final',
      autor: 'Brandon Sanderson',
      editorial: 'Nova',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  eliminarLibro(libro: any) {
    this.libros = this.libros.filter((l) => l.titulo !== libro.titulo);
  }

  guardarLibro(form: NgForm) {
    if (form.valid){
      let libro = { ...form.value };
      this.libros.push(libro);
      form.reset();
    }
  }
}
