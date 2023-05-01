import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Footer() {

  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState['token']>(
      (state) => state.token
  )

  let footerComponent;

  if(token !== '') {
      footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box className="boxPrincipal">
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className="descricao"
            >
              {" "}
              Siga-nos nas redes sociais
            </Typography>
          </Box>
          <Box display="flex" alignItems="right" justifyContent="center">
            <a href="https://github.com/ConectaVaga" target="_blank">
              <GitHubIcon className="icones" />
            </a>
          </Box>
        </Box>
        <Box className="boxPrincipal">
          <Box paddingTop={1}>
            <Typography
              className="logo"
              variant="subtitle2"
              align="center"
              gutterBottom
            >
              {" "}
              ©2023 ConectaVaga. Todos os direitos reservados.
            </Typography>
          </Box>
          <Box>
            <a target="blank" href="">
              <Typography
                variant="subtitle2"
                gutterBottom
                className="descricao"
                align="center"
              >
                {" "}
                Projeto integrador do grupo 3
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }
  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;
