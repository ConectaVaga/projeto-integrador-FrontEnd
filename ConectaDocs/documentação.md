# :page_facing_up: Documentação da API ConectaVaga

<br>

<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
<!--        U S U A R I O        -->
<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
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
      "foto": "url-da-foto",
      "postagem": [
        {
          "id": "#", // número do ID do tema da postagem
          "titulo": "Exemplo de Postagem",
          "texto": "Texto do exemplo de Postagem",
          "data": "2023-04-19T19:17:14.42744",
          "imagem": null,
          "tema": {
            "id": "#", // número do ID do usuário que fez a postagem
            "categoria": "Exemplo de Teste",
            "nome": "Nome da Categoria de Teste"
        } // em caso de múltiplas postagens, aparecerão mais aqui
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
    "postagem": [] // em caso de postagens, elas aparecerão aqui
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
    "id": "#", // número da ID única que foi atualizada (mantém-se a mesma)
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
  
  
<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
<!--           T E M A           -->
<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
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
    <b>/temas</b>
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
      "postagem": [] // ou todas as postagens deste tema específico
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
    "postagem": [] // ou todas as postagens deste tema específico
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
  <p>É possível pesquisar por qualquer <code>nome</code>, seja uma parte ou completo. No exemplo, foi pesquisado <code>tes</code>.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do tema
    "categoria": "Exemplo de Teste",
    "nome": "Nome da Categoria de Teste",
    "postagem": [] // ou todas as postagens deste tema específico
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
    "id": "#", // número do ID único que foi atualizado (mantém-se o mesmo)
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

  
  
<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
<!--      P O S T A G E N S      -->
<!-- =========================== -->
<!-- =========================== -->
<!-- =========================== -->
## Postagem

<!-- =========================== -->
<!--       C A D A S T R A R     -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="POST" width="40px" height="22px">
    <b>/postagens</b>
  </summary>
  <br>
  <p>Adicionar uma nova postagem.</p>
  <br>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "titulo":"Exemplo de Postagem",
    "texto":"Texto do exemplo de Postagem",
    "imagem":"url-da-imagem",
    "tema":{
      "id": "#" // número do ID de um tema
    },
    "usuario":{
      "id": "#" // número do ID de um usuário
    }
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único da postagem adicionada
    "titulo": "Exemplo de Postagem",
    "texto": "Texto do exemplo de Postagem",
    "data": "2023-04-19T19:17:14.427439796",
    "imagem": null,
    "tema": {
      "id": "#", // número do ID do tema da postagem
      "categoria": null,
      "nome": null
    },
    "usuario": {
      "id": "#", // número do ID do usuário que fez a postagem
      "nome": null,
      "usuario": null,
      "senha": null,
      "foto": null
    }
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
    <b>/postagens</b>
  </summary>
  <br>
  <p>Listar todas as postagens.</p>
  <br>
  <b><<< Resposta:</b>
  
  ```json
  [
    {
      "id": "#", // número do ID único da postagem
      "titulo": "Exemplo de Postagem",
      "texto": "Texto do exemplo de Postagem",
      "data": "2023-04-19T19:17:14.42744",
      "imagem": null,
      "tema": {
        "id": "#", // número do ID do tema da postagem
        "categoria": "Exemplo de Teste",
        "nome": "Nome da Categoria de Teste"
      },
      "usuario": {
        "id": "#", // número do ID do usuário que fez a postagem
        "nome": "Nome do Usuario",
        "usuario": "email@provedor.com",
        "senha": "senha-criptografada",
        "foto": "url-da-foto"
      }
    } // em caso de múltiplas postagens, aparecerão mais aqui
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
    <b>/postagens/{id}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É necessário enviar uma <code>id</code> válida na url da requisição.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único da postagem
    "titulo": "Exemplo de Postagem",
    "texto": "Texto do exemplo de Postagem",
    "data": "2023-04-19T19:17:14.42744",
    "imagem": null,
    "tema": {
      "id": "#", // número do ID do tema da postagem
      "categoria": "Exemplo de Teste",
      "nome": "Nome da Categoria de Teste"
    },
    "usuario": {
      "id": "#", // número do ID do usuário que fez a postagem
      "nome": "Nome do Usuario",
      "usuario": "email@provedor.com",
      "senha": "senha-criptografada",
      "foto": "url-da-foto"
    }
  }
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--         T Í T U L O         -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="GET" width="40px" height="22px">
    <b>/postagens/titulo/{titulo}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É possível pesquisar por qualquer <code>titulo</code> de postagem, seja uma parte ou completo. No exemplo, foi pesquisado <code>exe</code>.</p>
  
  <b><<< Resposta:</b>
  
  ```json
  [
    {
      "id": "#", // número do ID único da postagem
      "titulo": "Exemplo de Postagem",
      "texto": "Texto do exemplo de Postagem",
      "data": "2023-04-19T19:17:14.42744",
      "imagem": null,
      "tema": {
        "id": "#", // número do ID do tema da postagem
        "categoria": "Exemplo de Teste",
        "nome": "Nome da Categoria de Teste"
      },
      "usuario": {
        "id": "#", // número do ID do usuário que fez a postagem
        "nome": "Nome do Usuario",
        "usuario": "email@provedor.com",
        "senha": "senha-criptografada",
        "foto": "url-da-foto"
      }
    } // em caso de múltiplas postagens, aparecerão mais aqui
  ]
  ```
  
  <br>
</details>


<!-- =========================== -->
<!--      A T U A L I Z A R      -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/PUT.png" alt="PUT" width="40px" height="22px">
    <b>/postagens</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>Atualizar ao menos uma parte da postagem. No exemplo: título e texto são alterados.</p>
  
  ```json
  {
    "id":"#", // número do ID único da postagem a ser atualizada
    "titulo":"Novo Exemplo de Postagem",
    "texto":"Novo Texto do exemplo de Postagem",
    "tema":{
      "id":"#" // número de ID do tema da postagem a ser atualizada
    },
    "usuario":{
      "id":"#" // número de ID do usuário que fez a postagem a ser atualizada
    }
  }
  ```
  
  <br>
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único da postagem que foi atualizada (mantém-se o mesmo)
    "titulo": "Novo Exemplo de Postagem",
    "texto": "Novo Texto do exemplo de Postagem",
    "data": "2023-04-20T16:59:33.632666592", // a data é atualizada
    "imagem": null,
    "tema": {
      "id": "#", // número de ID do tema da postagem que foi atualizada
      "categoria": "Exemplo de Teste",
      "nome": "Nome da Categoria de Teste"
    },
    "usuario": {
      "id": "#", // número de ID do usuário que fez a postagem que foi atualizada
      "nome": "Nome do Usuario",
      "usuario": "email@provedor.com",
      "senha": "senha-criptografada",
      "foto": "url-da-foto"
    }
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
    <b>/postagens/{id}</b>
  </summary>
  <br>
  <b>>>> Requisição:</b>
  <p>É necessário enviar uma <code>id</code> válida na url da requisição.</p>
  
  <b><<< Resposta:</b>
  <p>Retorna o código 204.</p>
  
  <br>
</details>
