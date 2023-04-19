import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
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
            <Box display="flex" alignItems="center" justifyContent="center">
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
                2023 Copyright
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
    </>
  );
}

export default Footer;
