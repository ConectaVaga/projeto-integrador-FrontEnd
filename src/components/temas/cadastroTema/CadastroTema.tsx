import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema  from "../../../models/Tema";
import { buscaId, post, put } from "../../../service/Service";
import { Button, Typography, TextField, Grid, Box } from "@mui/material";
import "./CadastroTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";


function CadastroTema() {
  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["token"]>(
   (state) => state.token
  );

  const [tema, setTema] = useState<Tema>({
    id: 0,
    categoria: '',
    nome: ''
  });

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
    })
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("tema " + JSON.stringify(tema));

    if (id !== undefined) {
      console.log(tema);
      await put("/temas", tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Tema atualizado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
    })
    } else {
      post("/temas", tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Tema cadastrado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
    })
      history("/temas");
    }
    back();
  }

  function back() {
    history("/temas");
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundo-tema"
    >
      <Grid alignItems={"center"} xs={6}>
        <Box textAlign={"center"}>
          <Typography component={"h2"} variant="h2">
            {tema.id !== 0 ? "Editar tema" : "Cadastrar tema"}
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              className="input-tema"
              label="Nome do tema"
              name="nome"
              value={tema.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedTema(event)
              }
            />
            <TextField
              className="input-tema"
              label="Categoria do tema"
              name="categoria"
              value={tema.categoria}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedTema(event)
              }
            />
            <Box marginTop={2} textAlign={"center"}>
              <Button type="submit" variant="contained" className="button-tema">
                {tema.id !== 0 ? "Atualizar" : "Cadastrar"}
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem-tema"></Grid>
    </Grid>
  );
}

export default CadastroTema;
