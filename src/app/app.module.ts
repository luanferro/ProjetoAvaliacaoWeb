import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Aluno/listar/listar.component';
import { NovoComponent } from './Aluno/novo/novo.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
 



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NovoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
