import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: any;

  @Output() libroClicked = new EventEmitter();

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  onClicked(): void {
    //this.libroClicked.emit(this.libro);
    //alert('Libro seleccionado: ' + this.libro.titulo);
    this.librosService.deleteLibro(this.libro);
  }

}
