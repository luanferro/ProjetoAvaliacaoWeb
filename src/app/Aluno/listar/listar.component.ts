import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/Model/Aluno';
import { Avaliacao } from 'src/app/Model/Avaliacao';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  alunos: Aluno[] = [];

  cols: any[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAlunos();

    this.cols = [
      { field: 'aluno', header: 'Aluno' },
      { field: 'bimestre1', header: 'Bimestre 1' },
      { field: 'bimestre2', header: 'Bimestre 2' },
      { field: 'bimestre3', header: 'Bimestre 3' },
      { field: 'bimestre4', header: 'Bimestre 4' },
      { field: 'mediaFinal', header: 'Média Final' },
      { field: 'faltas', header: 'Presença' },
      { field: 'situacao', header: 'Situacao' }
  ];
  }

  getAlunos(){
     this.service.getAlunos().subscribe(data=>{
       console.log(data);
      this.alunos=data;
    })
  }

}
