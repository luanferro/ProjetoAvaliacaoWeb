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

  //url base do projeto
  UrlBase="http://localhost:8080/projetoAvaliacao";
  
  //metodo para retornar os alunos cadastrados
  getAlunos(){
    const url = `${this.UrlBase}/alunos`;
    return this.http.get<Aluno[]>(url);
  }

  //metodo para retornar as avaliacoes cadastradas
  getAvaliacoes(){
    const url = `${this.UrlBase}/avaliacoes`;
    return this.http.get<Avaliacao[]>(url);
  }

  //metodo para adicionar as notas
  addNota(nota:Nota){
    const url = `${this.UrlBase}/notas`;
    return this.http.post<Nota>(url, nota);
  }

  //metodo para buscar todas as medias e a situcao dos alunos
  getNotas(){
    const url = `${this.UrlBase}/notas`;
    return this.http.get<Nota[]>(url);
  }
}
