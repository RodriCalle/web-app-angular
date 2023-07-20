import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = '';
  usuarios = ['Rodrigo', 'Juan', 'Pedro', 'Maria', 'Luisa'];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    this.usuarios.push(this.usuario);
    this.usuario = '';
  }

}
