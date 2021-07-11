import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Aluno/listar/listar.component';
import { NovoComponent } from './Aluno/novo/novo.component';

const routes: Routes = [

  {path:'listar', component:ListarComponent},
  {path:'novo', component:NovoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
