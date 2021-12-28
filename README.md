# Projeto Final Senac - Precisa

<div>
<center><Logotipo com o nome Precisa> <img src="./Projeto Precisa - LOGO.png" alt="Logotipo projetoPrecisa"></center>
</div>
   
 
<div>
<h1> O Projeto </h1>
O projeto Precisa foi elaborado e estruturado pela turma do curso Desenvolvimento Web Back-End, na Instituição SENAC-PE, sob orientação da professora Tereza Oliveira. 

O site foi desenvolvido com o intuito de ser uma força, um instrumento para promover redução da desigualdade social, e da pobreza no país, agravada ainda mais pelo cenário de pandemia em que vivemos. O PRECISA, é um site que permite que o usuário (doador) encontrar instituições próximas que recebam doações e direciona a pessoas de vulnerabilidade social e econômica. A CRUD (requisições do back-end) tem 3 tipos de cadastro (SCHEMA), permitindo a conexão de:
</div>
<div>  
  <ul>
    <li> Quem pode doar (Doadores)</li>
    <li>Quem pode entregar (Instituições)</li>
    <li>Quem está precisando (Beneficiad@s)</li>
  </ul>
</div>
<div>
O curso de 96h focado em aperfeiçoamento na stack de back-end focou na linguagem de programação Javascript com plataforma Node.JS, banco de dados NoSQL MongoDB, lógica de programação, versionamento de código (Git e Github), API, Métodos HTTP, projetos e metodologia ágil.
</div>

<div> 
Como foi dito anteriormente, foram utilizados três Schemas principais, referentes a: Doadores, Instituições e Beneficiários, que podem ser encontrados na pasta .src/models, contendo os seguintes atributos:
<ul>
    <li> doadores - id Nome: {type: String}, CpfCnpj: {type: String}, Telefone: {type: String}</li>
    <li> instituicoes - id:{type: Number}, Nome:{type: String}, CpfCnpj:{type: Number}, Estado: {type: String}, Cidade:{type: String}, Bairro:{type: String},  Endereçodearrecadacao:{type: String}</li>
   <li> beneficiarios - id:{type: Number}, Nome:{type: String}, Comunidade:{type: String}, LocoMoradia:{type: String}</li>
    
</ul>
</div>
 
 <div> 
  <h3> Tecnologias utilizadas </h3>
   <ul>
     <li> Git</li>
     <li> Node.js</li>
     <li>MongoDB</li>
     <li>Postman</li>
   </ul>
 </div>
 
 <div> 
  <h3> Pacotes utilizados </h3>
   <ul>
     <li> Nodemon</li>
     <li> Mongoose</li>
    </ul>
 </div>
 
 <div>
 <h3>Métodos e Rotas</h3>
  Por meio dos métodos HTTP, será manipulado os dados de acordo com a necessidade dos usuários.

<ul> 
 <li>Para a entidade <b>doadores</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA             |             AÇÃO              |
|------- | -------------------  | ------------------------------|
|GET     | /doadores            |   Exibir todos os Doadores    |
|GET     | /doadores/:id        |   Exibir Doadores por id      |
|POST    | /doadores            |   Cadastrar Doadores          |
|DELETE  | /doadores/:id        |   Excluir Doadores            |
|PUT     | /doadores            | Alterar infos de Doadores    |


<li>Para a entidade <b>intiuicoes</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA             |             AÇÃO              |
|------- | ---------------------| ------------------------------|
|GET     | /instituicoes        | Exibir todas as Instiuições   |
|GET     | /insituicoes:id      |   Exibir Insituições por ID   |
|GET     | /instituicoes/Bairro |   Exibir por Bairro           |
|POST    | /instituicoes        |   Cadastrar Instituições      | 
|DELETE  | /instituicoes/:id    |   Excluir instituições        |
|PUT     | /instituicoes:id     | Alterar/atualizar Instituição |

 <li>Para a entidade <b>beneficiarios</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA             |             AÇÃO              |
|------- | ---------------------| ------------------------------|
|POST    | /beneficiarios       |   Cadastrar Beneficiário      | 
|DELETE  | /beneficiarios/:id   |   Excluir Beneficiário        |
|PUT     | /beneficiarios/:id   |Alterar/atualizar Beneficiário |
</ul>
 </div>
 
--------------------------------
<footer> <b> Projeto apresentado no dia 17/12/2021, projeto em processo de modificação. </footer>
 

 
