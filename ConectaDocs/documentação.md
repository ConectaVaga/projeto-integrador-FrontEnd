# :page_facing_up: Documentação da API ConectaVaga

<br>

## Usuário

<!-- =========================== -->
<!--       C A D A S T R A R     -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="POST" width="40px" height="22px">
    <b>/usuarios/cadastrar</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "nome":"Nome do Usuario",
    "usuario":"email@provedor.com",
    "senha":"senha-do-usuario", // no mínimo 8 caracteres
    "foto":"url-da-foto"
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do usuário
    "nome": "Nome do Usuario",
    "usuario": "email@provedor.com",
    "senha": "senha-criptografada",
    "foto": "url-da-foto",
    "postagem": null
  }
  ```
  <br>
</details>


<!-- =========================== -->
<!--           L O G A R         -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="POST" width="40px" height="22px">
    <b>/usuarios/logar</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "usuario":"email@provedor.com",
    "senha":"senha-do-usuario"
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do usuário
    "nome": "Nome do Usuario",
    "usuario": "email@provedor.com",
    "senha": "senha-criptografada",
    "foto": "url-da-foto",
    "token": "Basic codigo-do-token" // o token de login é necessário para criar temas e postagens
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--             A L L           -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/usuarios/all</b>
  </summary>
  <br>
  <b><<< Resposta:</b>
  
  ```json
  [
    {
      "id": "#", // número do ID único do usuário
      "nome": "Nome do Usuario",
      "usuario": "email@provedor.com",
      "senha": "senha-criptografada",
      "foto": "url-da-foto", // ou null
      "postagem": [ ### TO DO **************************************************************************************************
        {
          "id": 6,
          "titulo": "Minha Postagem",
          "texto": "Spring Teste 1",
          "data": "2023-03-26T18:52:36.844974",
          "tema": {
            "id": 2,
            "descricao": "Tema 1 Atualizado"
          }
        }
      ]
    }
  ]
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--              I D            -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/usuarios/{id}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É necessário enviar uma <code>id</code> válida na url da requisição.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número da ID única requisitada
    "nome": "Nome do Usuario",
    "usuario": "email@provedor.com",
    "senha": "senha-criptografada",
    "foto": "url-da-foto",
    "postagem": []
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--      A T U A L I Z A R      -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/PUT.png" alt="PUT" width="40px" height="22px">
    <b>/usuarios/atualizar</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>Atualizar ao menos uma parte do cadastro. No exemplo: nome, e-mail do usuário, senha e foto são alterados.</p>
  
  ```json
  {
    "id":"#", // número da ID única a ser atualizada
    "nome":"Novo Nome do Usuario",
    "usuario":"novo.email@provedor.com",
    "senha":"nova-senha-do-usuario",
    "foto":"nova-url-da-foto"
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número da ID única que foi atualizada
    "nome": "Novo Nome do Usuario",
    "usuario": "novo.email@provedor.com",
    "senha": "nova-senha-criptografada",
    "foto": "nova-url-da-foto", // ou null
    "postagem": null
  }
  ```
  
  <br>
</details>


<br>

## Tema

<!-- =========================== -->
<!--       C A D A S T R A R     -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="POST" width="40px" height="22px">
    <b>/temas</b>
  </summary>
  <br>
  <p>Cadastro de um novo tema.</p>
  <br>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "categoria":"Exemplo de Teste",
    "nome":"Nome da Categoria de Teste"
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do tema
    "categoria": "Exemplo de Teste",
    "nome": "Nome da Categoria de Teste",
    "postagem": null
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--             A L L           -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/usuarios/all</b>
  </summary>
  <br>
  <p>Listar todos os temas.</p>
  <br>
  <b><<< Resposta:</b>
  
  ```json
  [
    {
      "id": "#", // número do ID único do tema
      "categoria": "Exemplo de Teste",
      "nome": "Nome da Categoria de Teste",
      "postagem": []
    }
  ]
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--              I D            -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/temas/{id}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É necessário enviar uma <code>id</code> válida na url da requisição.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único pesquisado
    "categoria": "Exemplo de Teste",
    "nome": "Nome da Categoria de Teste",
    "postagem": []
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--            N O M E          -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/temas/nome/{nome}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É possível pesquisar por qualquer <code>nome</code>, seja uma parte ou completo.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do tema
    "categoria": "Exemplo de Teste",
    "nome": "Nome da Categoria de Teste",
    "postagem": []
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--      A T U A L I Z A R      -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/PUT.png" alt="PUT" width="40px" height="22px">
    <b>/temas</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>Atualizar ao menos uma parte do tema. No exemplo: categoria e nome são alterados.</p>
  
  ```json
  {
    "id": "#", // número do ID único a ser atualizado
    "categoria": "Novo exemplo de Teste",
    "nome": "Novo nome da categoria de Teste"
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único que foi atualizado
    "categoria": "Novo exemplo de Teste",
    "nome": "Novo nome da categoria de Teste",
    "postagem": null
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--         D E L E T A R       -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/DELETE.png" alt="DELETE" width="50px" height="22px">
    <b>/temas/{id}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É necessário enviar uma <code>id</code> válida na url da requisição.</p>
  
  <b><<< Resposta:</b>
  <p>Retorna o código 204.</p>
  
  <br>
</details>


<br>

## Postagem


  
  

  

  


================================================================================











