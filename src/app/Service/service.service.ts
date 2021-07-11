import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../Model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/ProjetoAvaliacao/alunos";

  getAlunos(){
    return this.http.get<Aluno[]>(this.Url);
  }
}
