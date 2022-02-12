import { Injectable } from '@angular/core';

// Decorator que torna a classe injetavel
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ["Java","Angular"];
  }
}
