import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="Abar">
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Link to="/home">
              <Box className="cursor">
                <Typography variant="h5" color="inherit">
                  <img
                    src="https://ik.imagekit.io/6kg1q0s1r/Logo_ConectVagas_1.png?updatedAt=1681492211384"
                    alt=""
                    width={30}
                    height={25}
                  />{" "}
                  ConectaVaga
                </Typography>
              </Box>
            </Link>

            <Box display="flex">
              <Link to="/home">
                <Box mx={1} className="cursor">
                  <Typography variant="subtitle1" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor">
                <Typography variant="subtitle1" color="inherit">
                  Postagens
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="subtitle1" color="inherit">
                  Temas
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="subtitle1" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
              <Link to="/sobrenos">
                <Box mx={1} className="cursor">
                  <Typography variant="subtitle1" color="inherit">
                    Sobre
                  </Typography>
                </Box>
              </Link>
              <Link to="/sobrenos">
                <Box mx={1} className="cursor">
                  <Typography variant="subtitle1" color="inherit">
                    Contato
                  </Typography>
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/login" id="textDecorator">
                <Box mx={1} className="textDecorator">
                  <Typography variant="subtitle1" color="inherit">
                    Logout
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
