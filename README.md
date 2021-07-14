

<h1 align="center">
      <a href="#" alt="Boletim Escolar"> Boletim Escolar </a>
</h1>

<h3 align="center">
    Cadastro e Consulta de notas dos alunos  
</h3>

<p align="center">

  
  <a href="https://github.com/luanferro/ProjetoAvaliacaoWeb/commit/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/luanferro/ProjetoAvaliacaoWeb">
  </a>
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  

  <a href="https://github.com/luanferro">
    <img alt="Feito por luanferro">
  </a> 
</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Esse projeto consiste em um boletim escolar onde o usuário pode cadastrar as notas e faltas dos alunos e consultar sua devida situação escolar. Desenvolvido com intuito de participar de um processo seletivo.

---

## ⚙️ Funcionalidades

- [x] Usuarios podem cadastrar notas e faltas selecionando/inserindo:
  - [x] nome do aluno
  - [x] bimestre o qual as notas pertencem
  - [x] as notas referente as 4 avaliacoes existentes
  - [x] o numero de faltas daquele bimestre
- [x] Usuarios podem consultar a situacao dos alunos em uma tabela que contem as seguinte colunas:
  - [x] Nome do Aluno
  - [x] Media do 1 Bimestre
  - [x] Media do 2 Bimestre
  - [x] Media do 3 Bimestre
  - [x] Media do 4 Bimestre
  - [x] Media Final do ano letivo
  - [x] Percentual de presença do aluno
  - [x] Situação do aluno (Aprovado, Reprovado ou Em Recuperação)

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (projeto ProjetoAvaliacao + banco de dados) 
2. Frontend (projeto ProjetoAvaliacaoWeb)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [xampp](https://www.apachefriends.org/pt_br/download.html), [eclipse](https://www.eclipse.org/downloads/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/luanferro/ProjetoAvaliacao.git

```
Abra o Eclipse:

1 - Abra o eclipse e importe o projeto clonado;
2 - Atualize o projeto com alt + F5 para baixar todas as dependencias;
3 - inicie o projeto;

Execute o xampp e inicie os servicos apache e mysql;
Clique em admin no servico mysql e sera iniciado o phpmyadmin;
Importe o banco de dados que se encontra dentro da pasta ProjetoAvaliacao/documentos/bancodedados/;

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/luanferro/ProjetoAvaliacaoWeb.git

# Caso nao tenha o angular instado sera preciso instalar
$ npm install -g @angular/cli

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ProjetoAvaliacaoWeb

# Instale as dependências
$ npm install

# Execute a aplicacao 
$ ng serve

# A aplicação será aberta na porta:4200 - acesse http://localhost:4200

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Angular](https://angular.io/)  +  [PrimeNg](https://www.primefaces.org/primeng/))

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  (Java +  [SpringBoot](https://spring.io/projects/spring-boot) + [JPA](https://spring.io/projects/spring-data-jpa))

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)** 

---

## 🦸 Autor

 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQEiIsySLzHFAw/profile-displayphoto-shrink_200_200/0/1553716492067?e=1631750400&v=beta&t=gf08aDDZoNXMBsdC-tpqrLL8juPk7BNPa2jYGL6BVDM" width="100px;" alt=""/>
 <br />
 <sub><b>Luan Ferro</b></sub></a> <a href="https://www.instagram.com/ferroluan/" title="Rocketseat"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luan-ferro-186771172/)](https://www.linkedin.com/in/luan-ferro-186771172/) 
[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=luanferror@gmail.com )](luanferror@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Luan Ferro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/luan-ferro-186771172/)

---