import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: any;

  @Output() libroClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
    this.libroClicked.emit(this.libro);
    alert('Libro seleccionado: ' + this.libro.titulo);
  }

}
