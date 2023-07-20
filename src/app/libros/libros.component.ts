import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit, OnDestroy {

  libros = [];
  libroSubscription: Subscription;
  
  constructor(private librosService: LibrosService) {
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.getLibros();
    });
  }

  eliminarLibro(libro: any) {
    this.librosService.deleteLibro(libro);
  }

  guardarLibro(form: NgForm) {
    if (form.valid){
      let libro = { ...form.value };
      this.librosService.addLibro(libro);
      form.reset();
    }
  }
}
