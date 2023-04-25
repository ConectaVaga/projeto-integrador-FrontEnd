import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

function Footer() {
  
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="boxPrincipal"
      >
        <Grid item xs={4}>
          <Box
                paddingTop={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection={"column"}>
                  <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    className="descricao">
                    Fale Conosco
                  </Typography>
                  <Typography variant="subtitle1" className="descricao">
                    conectavagas@gmail.com
                  </Typography>
          </Box>
        </Grid> 
        <Grid item xs={4}>
          <Box display="flex" alignItems="center" justifyContent="center" marginTop={1} flexDirection={"column"}>
            <img
              src="https://ik.imagekit.io/6kg1q0s1r/Logo_ConectVagas_1.png?updatedAt=1681492211384"
              alt="" className="imgFooter" />
            <Typography className="descricao">ConectaVaga</Typography>
            <Typography className="descricao" variant="subtitle2">
              ©2023 ConectaVaga. Todos os direitos reservados.
            </Typography>   
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
                  paddingTop={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={"column"}>
                    <Typography
                      variant="h5"
                      align="center"
                      gutterBottom
                      className="descricao">
                      Siga-nos
                    </Typography>
                    <Typography variant="subtitle1" className="descricao">
                      <GitHubIcon/> @conectaVaga
                    </Typography>
                    <Typography variant="subtitle1" className="descricao">
                      <InstagramIcon/> @conectaVaga
                    </Typography>
            </Box>
        </Grid> 

      
      </Grid>
    </>
  );
}

export default Footer;
