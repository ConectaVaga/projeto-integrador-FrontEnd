import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )

  const dispatch = useDispatch()

  const history = useNavigate()

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined
    })
    history('/login')
  }


  var navbarComponent

  if (token !== '') {
    navbarComponent = <AppBar position="static" className="Abar">
      <Toolbar variant="dense">
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Link to={"/home"}>
            <Box className="cursor">
              <Typography variant="h5" color="inherit">
                <img
                  src="https://ik.imagekit.io/vfpark/conecta_smj6GfD0l?updatedAt=1682895937850"
                  alt=""
                  className="icon"
                />
              </Typography>
            </Box>
          </Link>

          <Box display="flex" alignItems='center'>

            <Link to={"/home"}>
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>


            <Link to={"/postagens"}>
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to={"/temas"}>
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to={"/formularioTema"}>
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link >
            
            <Link to="/sobrenos">
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Sobre
                </Typography>
              </Box>

            </Link>
            
            <Link to="/sobrenos">
              <Box mx={5} className="cursor">
                <Typography variant="h6" color="inherit">
                  Contato
                </Typography>
              </Box>
            </Link>

          </Box>

          
          <Box>
            <Box mx={1} className="logout" onClick={goLogout} display={"flex"} justifyContent={"space-between"} width={"100%"}>
              <Typography variant="h5" color="inherit">
                <img src="https://ik.imagekit.io/vfpark/logouts2.png?updatedAt=1682899164488" alt=""/>
              </Typography>
            </Box>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );

}

export default Navbar
