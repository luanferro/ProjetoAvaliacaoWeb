import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../Model/Aluno';
import { Avaliacao } from '../Model/Avaliacao';
import { Nota } from '../Model/Nota';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlBase="http://localhost:8080/projetoAvaliacao";

  getAlunos(){
    const url = `${this.UrlBase}/alunos`;
    return this.http.get<Aluno[]>(url);
  }

  getAvaliacoes(){
    const url = `${this.UrlBase}/avaliacoes`;
    return this.http.get<Avaliacao[]>(url);
  }

  addNota(nota:Nota){
    const url = `${this.UrlBase}/notas`;
    return this.http.post<Nota>(url, nota);
  }
}
