import "./Login.css";
import { Grid } from "@material-ui/core";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../service/Service";
import Usuario from "../../models/Usuario";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { addId, addToken } from "../../store/tokens/action";

function Login() {
  const history = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);

      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistente. Verifique os campos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      history("/home");
    }
  }, [respUserLogin.token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={5} className="imagemLogin"></Grid>
        <Grid item xs={6} alignItems="center">
          <Box paddingX={4}>
            <form onSubmit={onSubmit}>
              <Box paddingX={12}>
                <Typography
                  variant="h3"
                  gutterBottom
                  color="textPrimary"
                  component="h3"
                  align="center"
                >
                  Seja bem-vinde!
                </Typography>
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                color={"textPrimary"}
                align="center"
                
              >
                Acesse sua conta agora mesmo.
              </Typography>
              <TextField
                id="usuario"
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                type="text"
                required
                className="textField"              

              />
              <TextField
                id="senha"
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                required
                className="textField"   
                style={{marginBottom:"4vh"}}            


              />
              <Box marginTop={0} textAlign={"center"}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                   
                >
                  Logar
                </Button>
              </Box>
            </form>
            <Box display={"flex"} justifyContent={"center"}>
              <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                >
                  Novo no ConectaVaga?
                </Typography>
              </Box>
              <Link to={"/cadastroUsuario"}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className='textoCadastre'
              
                >
                  Cadastra-se!
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
