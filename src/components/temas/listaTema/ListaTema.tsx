import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import Tema  from "../../../models/Tema";
import { busca } from "../../../service/Service";
import "./ListaTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";


function ListaTema() {
  
  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
     (state) => state.token
  );

  const history = useNavigate();

  async function getAllTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
  }, []);

  useEffect(() => {
    if (token === "") {
      history("/login");
    }
  }, []);

  return (
    <>
      {temas.map((tema) => (
        <Box m={2} >
          <Card variant="outlined" style={{ padding: '8px', backgroundColor: ' #c6ffff41', width:'500px'}}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              
              <Typography variant="h4" component="h2">
                {tema.nome}
              </Typography>
              <Typography variant="h6" component="h2">
                {tema.categoria}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
