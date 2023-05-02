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

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  let footerComponent;

  if(token !== '') {
      footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      </Grid>

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
                    className="logo">
                    Fale Conosco
                  </Typography>
                  <Typography variant="subtitle1" className="logo">
                    conectavagas@gmail.com
                  </Typography>
          </Box>
        </Grid> 
        <Grid item xs={4}>
          <Box display="flex" alignItems="center" justifyContent="center" marginTop={1} flexDirection={"column"}>
            <img
              src="https://ik.imagekit.io/vfpark/conecta_smj6GfD0l?updatedAt=1682895937850"
              alt="" width="160" height="100"/>
            <Typography className="descricao" variant="subtitle2" color="white">
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
                      className="logo">
                      Siga-nos
                    </Typography>

                    <Box display="flex" alignItems="right" justifyContent="center">
                    <a href="https://github.com/ConectaVaga" target="_blank">
                    <Typography variant="subtitle1" className="logo" color="black">
                      <GitHubIcon /> @ConectaVaga
                    </Typography>
                    </a>
                    </Box>
            </Box>
        </Grid> 

      
      </Grid>
    </>
  );
}
}

export default Footer;
