import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Thiego"
    usuario.email = "thiegobarros@gmail.com"

    return usuario
  }

}
