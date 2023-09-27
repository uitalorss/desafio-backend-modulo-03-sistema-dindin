# Dindin API

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/uitalorss/desafio-backend-modulo-03-sistema-dindin?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/uitalorss/desafio-backend-modulo-03-sistema-dindin?style=for-the-badge)

<img src="./logo.png" alt="exemplo imagem">

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Desenvolvimento do projeto
- [x] Entrega do projeto
- [x] Aplicação de melhorias (uso de Query Builder e validação dinâmica)
- [ ] Construção da documentação em Swagger
- [ ] Reconstrução do projeto com Typescript

## 🚀 Instalando o DindinAPI

Para instalar o projeto, instale as dependências usando o comando abaxo:

npm:

```
npm install
```

yarn:

```
yarn add
```

## ☕ Usando DindinAPI

Para usar o DindinAPI, siga estas etapas:

npm:

```
npm run dev
```

yarn:

```
yarn dev
```

Deploy

```
<link>
```

## Endpoints

### Cadastro de usuário

`POST/usuario`

- Esse serviço cadastra um novo usuário no sistema.

**Exemplo de Requisição**

```javascript
{
    "nome": "José",
    "email": "jose@email.com",
    "senha": "123456"
}
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 201
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}
```

```javascript
// HTTP Status Code - 400
{
    "mensagem": "Já existe usuário cadastrado com o e-mail informado."
}
```

### Login do usuário

`POST/login`

- Esse serviço permite a um usuário cadastrado logar no sistema para usufruir dos serviços disponíveis.
  - Ao entrar no ambiente após o login, é gerado um token para autenticação nos demais serviços da API.

**Exemplo de Requisição**

```javascript
{
    "email": "jose@email.com",
    "senha": "123456"
}
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 201
{
  "usuario": {
      "id": 1,
      "nome": "José",
      "email": "jose@email.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIzMjQ5NjIxLCJleHAiOjE2MjMyNzg0MjF9.KLR9t7m_JQJfpuRv9_8H2-XJ92TSjKhGPxJXVfX6wBI"
}
```

### Detalhar usuário

`GET/usuario`

#### **Exemplos de resposta**

- Esse serviço permite ao usuário visualizar os seus dados cadastrados.

```javascript
// HTTP Status Code 200
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}
```

```javascript
// HTTP Status Code 401
{
    "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
}
```

### Editar usuário

`PUT/usuario`

- Esse serviço permite ao usuário logado atualizar os seus dados cadastrados.

#### **Exemplo de requisição**

```javascript
// PUT /usuario
{
    "nome": "José de Abreu",
    "email": "jose_abreu@email.com",
    "senha": "j4321"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status Code 204
```

```javascript
// HTTP Status Code 400
{
    "mensagem": "O e-mail informado já está sendo utilizado por outro usuário."
}
```

### Editar usuário

`GET/categoria`

- Esse serviço lista para o usuário todas as categorias disponíveis na API.

#### **Exemplo de requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status Code 200
[
  {
    id: 1,
    descricao: "Roupas",
  },
  {
    id: 2,
    descricao: "Mercado",
  },
];
```

```javascript
// HTTP Status Code 200
[];
```

### **Cadastrar transação**

`POST/transacao`

- Esse serviço permite ao usuário cadastrar uma transação na aplicação.
  - Todos os campos são obrigatórios.
  - É necessário colocar o valor da transação em centavos.
  - É necessário colocar uma categoria válida.

#### **Exemplo de requisição**

```javascript
{
    "tipo": "entrada",
    "descricao": "Salário",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "categoria_id": 6
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
{
    "id": 3,
    "tipo": "entrada",
    "descricao": "Salário",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "usuario_id": 5,
    "categoria_id": 6,
    "categoria_nome": "Salários",
}
```

```javascript
// HTTP Status 400
{
    "mensagem": "Todos os campos obrigatórios devem ser informados."
}
```

### **Listar transações**

`GET/transacao`

- Esse serviço lista todas as transações de um usuário.

#### **Exemplo de requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 1,
    tipo: "saida",
    descricao: "Sapato amarelo",
    valor: 15800,
    data: "2022-03-23T15:35:00.000Z",
    usuario_id: 5,
    categoria_id: 4,
    categoria_nome: "Roupas",
  },
  {
    id: 3,
    tipo: "entrada",
    descricao: "Salário",
    valor: 300000,
    data: "2022-03-24T15:30:00.000Z",
    usuario_id: 5,
    categoria_id: 6,
    categoria_nome: "Salários",
  },
];
```

```javascript
// HTTP Status 200
[];
```

`GET/transacao?filtro[]=categoria`

- Esse serviço lista as transações filtrando por categoria que for passar pelo parâmetro de query

#### **Exemplo de requisição**

```javascript
// GET /transacao?filtro[]=roupas
// Sem conteúdo no corpo (body) da requisição
```

```javascript
// HTTP Status 200
[
  {
    id: 1,
    tipo: "saida",
    descricao: "Sapato amarelo",
    valor: 15800,
    data: "2022-03-23T15:35:00.000Z",
    usuario_id: 5,
    categoria_id: 4,
    categoria_nome: "Roupas",
  },
];
```

### **Detalhar uma transação**

`GET/transacao/:id`

- Esse serviço recebe um identificador pela rota da aplicação e retorna a transação referente àquele identificador

#### **Exemplo de requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status Code 200
{
    "id": 3,
    "tipo": "entrada",
    "descricao": "Salário",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "usuario_id": 5,
    "categoria_id": 6,
    "categoria_nome": "Salários",
}
```

```javascript
// HTTP Status Code 404
{
    "mensagem": "Transação não encontrada."
}
```

### **Atualizar transação**

`PUT/transacao/:id`

- Esse serviço recebe um identificador pela rota da aplicação e no seu corpo os itens são descritos para ser atualizados no servidor.
  - Todos os campos são obrigatórios.
  - É necessário colocar o valor da transação em centavos.
  - É necessário colocar uma categoria válida.

```javascript
{
	"descricao": "Sapato amarelo",
	"valor": 15800,
	"data": "2022-03-23 12:35:00",
	"categoria_id": 4,
	"tipo": "saida"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status Code 204
// Sem conteúdo no corpo (body) da resposta
```

```javascript
// HTTP Status Code 400
{
    "mensagem": "Todos os campos obrigatórios devem ser informados."
}
```

### **Excluir transação**

`DELETE/transacao/:id`

- Esse serviço recebe um identificador pela rota da aplicação e a transação com o id referente ao identificador é excluído do servidor.
  - A transação precisa ser do mesmo usuário que está autenticado na aplicação.

#### **Exemplo de requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status Code 204
// Sem conteúdo no corpo (body) da resposta
```

```javascript
// HTTP Status Code 404
{
    "mensagem": "Transação não encontrada."
}
```

### **Obter extrato de transações**

`GET/transacao/extrato`

- Esse serviço lista de forma sintética o valor de todas as transações de entrada e saída do usuário.

#### **Exemplo de requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
{
	"entrada": 300000,
	"saida": 15800
}
```

## 📫 Contribuindo para DindinAPI

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

Para contribuir com DindinAPI, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/15834173?v=4" width="100px;" alt="Foto do Uítalo Souza no GitHub"/><br>
        <sub>
          <b>Uítalo Souza</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/20049294?v=4" width="100px;" alt="Foto do Juscelino Messias no Github"/><br>
        <sub>
          <b>Juscelino Messias</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#Dindin-API)<br>
