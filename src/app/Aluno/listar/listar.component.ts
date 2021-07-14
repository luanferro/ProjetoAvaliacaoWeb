import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/Model/Aluno';
import { Avaliacao } from 'src/app/Model/Avaliacao';
import { Nota } from 'src/app/Model/Nota';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  notas: Nota[] = [];

  cols: any[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getNotas();


    //colunas da tabela
    this.cols = [
      { field: 'aluno', header: 'Aluno' },
      { field: 'bimestre1', header: 'Bimestre 1' },
      { field: 'bimestre2', header: 'Bimestre 2' },
      { field: 'bimestre3', header: 'Bimestre 3' },
      { field: 'bimestre4', header: 'Bimestre 4' },
      { field: 'mediaFinal', header: 'Média Final' },
      { field: 'porcentagemFaltas', header: 'Presença' },
      { field: 'situacao', header: 'Situacao' }
  ];
  }

  //busca os dados dos alunos e sua situacao
  getNotas(){
    this.service.getNotas().subscribe(data=>{
      console.log(data);
      this.notas=data;
    })
  }


}
