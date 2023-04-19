# :page_facing_up: Documentação da API ConectaVaga

## Usuário

<!-- =========================== -->
<!--       C A D A S T R A R     -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="Get" width="40px" height="22px">
    <b>/usuarios/cadastrar</b>
  </summary>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "nome":"Nome do Usuario",
    "usuario":"email@provedor.com",
    "senha":"senha-do-usuario", // no mínimo 8 caracteres
    "foto":"url-da-foto"
  }
  ```
  
  <b><<< Resposta:</b>
  
  ```json
  {
    "id": "#", // número do ID único do usuário
    "nome": "Nome do Usuario",
    "usuario": "email@provedor.com",
    "senha": "senha-criptografada",
    "foto": "url-da-foto",
    "postagem": null // ou as postagens deste usuário
  }
  ```
  
</details>


<!-- =========================== -->
<!--           L O G A R         -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/POST.png" alt="Get" width="40px" height="22px">
    <b>/usuarios/logar</b>
  </summary>
  <b>>>> Requisição:</b>
  
  ```json
  {
    "usuario":"email@provedor.com",
    "senha":"senha-do-usuario"
  }
  ```
  
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
  
</details>


<!-- =========================== -->
<!--             A L L           -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="Get" width="40px" height="22px">
    <b>/usuarios/all</b>
  </summary>
  
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
  
</details>


<!-- =========================== -->
<!--              I D            -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/GET.png" alt="Get" width="40px" height="22px">
    <b>/usuarios/{id}</b>
  </summary>
  
  <b>>>> Requisição:</b>
  É necessário enviar uma `id` válida na url da requisição.
  
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
  
</details>


<!-- =========================== -->
<!--      A T U A L I Z A R      -->
<!-- =========================== -->
<details>
  <summary>
    <img src="./img/PUT.png" alt="Get" width="40px" height="22px">
    <b>/usuarios/atualizar</b>
  </summary>
  
  <b>>>> Requisição:</b>
  Atualizar ao menos uma parte do cadastro. No exemplo: nome, e-mail do usuário, senha e foto são alterados.
  
  ```json
  {
    "id":"#", // número da ID única a ser atualizada
    "nome":"Novo Nome do Usuario",
    "usuario":"novo.email@provedor.com",
    "senha":"nova-senha-do-usuario",
    "foto":"nova-url-da-foto"
  }
  ```
  
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
  
</details>


## Tema





================================================================================










  



  
  
  
  
  
