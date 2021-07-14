import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avaliacao } from 'src/app/Model/Avaliacao';
import { Nota } from 'src/app/Model/Nota';
import { ServiceService } from 'src/app/Service/service.service';
import { Aluno } from 'src/app/Model/Aluno';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  avaliacoes: Avaliacao[] = [];

  alunos: Aluno[] = [];

  bimestres: any[] = [
    1,2,3,4
  ];

  nota: Nota = new Nota();

  constructor(private service:ServiceService, private router:Router) {}
   
  ngOnInit(): void {
    this.getAvaliacoes();
    this.getAlunos();
  }

  //busca as avaliacoes
  getAvaliacoes(){
    this.service.getAvaliacoes().subscribe(data=>{
      console.log(data);
      this.avaliacoes=data;
   })
  }

  //busca os alunos
  getAlunos(){
    this.service.getAlunos().subscribe(data=>{
      console.log(data);
      this.alunos=data;
    })
  }

  //salva as notas cadastradas
  Salvar(nota: Nota){
    this.service.addNota(nota).subscribe(
      data=>{
      alert("Salvo com sucesso!");
      
      //reseta o formulario
      this.nota = new Nota();
    })
  }

}
