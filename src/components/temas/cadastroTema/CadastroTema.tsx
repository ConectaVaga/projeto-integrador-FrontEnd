import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import { getById, post, put } from "../../../service/Service";
import { Button, Typography, TextField, Grid, Box } from "@mui/material";
import "./CadastroTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function CadastroTema() {
  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await getById(`/temas/${id}`, setTema, {
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
      alert("Tema atualizado com sucesso");
    } else {
      post("/temas", tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso");
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
              label="Descrição do tema"
              name="descricao"
              value={tema.descricao}
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
