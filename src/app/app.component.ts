import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  title = 'ProjetoAvaliacao';

  constructor(private router:Router, private primengConfig: PrimeNGConfig){};

  Listar(){
    this.router.navigate(["listar"]);
  }

  Novo(){
    this.router.navigate(["novo"]);
  }

  ngOnInit() {
    
}
}


