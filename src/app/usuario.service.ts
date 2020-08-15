import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Thiego"
    usuario.email = "thiegobarros@gmail.com"

    return usuario
  }

  public listaUsuario():Usuario[] {
    return [
      {
        nome: "Thiego",
        email: "thiego@gmail.com"
      },
      {
        nome: "Italo",
        email: "italo@gmail.com"
      },
      {
        nome: "Santos",
        email: "santos@gmail.com"
      },
      {
        nome: "Barros",
        email: "barros@gmail.com"
      }
    ]
  }

}
