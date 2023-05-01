import React, { useEffect } from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";


function Home() {

    const history = useNavigate();

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    useEffect(() => {
        if (token == "") {
            toast.error('VocÊ precisa estar logado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            history("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/C%C3%B3pia_de_Banners.png?updatedAt=1681922292947" alt="Imagem Capa" className="fotoHome" />
                </Grid>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={12}>
                        <Typography variant="h4" component="h3" align="center" className='titulo'>
                            Postagens em Destaques
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="h3" align="center" className='subtitulo'>
                            O que gostaria de compartilhar?
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" marginBottom={6}> 
                        <Box display={"flex"}>
                            <ModalPostagem />
                        </Box>
                        <Box marginLeft={3}>   
                            <Link to={"/postagens"}>
                                <Button variant="outlined" style={{backgroundColor:"#1d3557"}}> 
                                    Ver Postagens
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <ListaPostagem />
                </Grid>
            </Grid >
        </>
    );
}

export default Home;