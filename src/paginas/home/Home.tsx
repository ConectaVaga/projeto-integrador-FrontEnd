import React, { useEffect } from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";
import ListaTema from "../../components/temas/listaTema/ListaTema";
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
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                            Seja bem-vindo!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                            O que gostaria de compartilhar?
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                            <Link to={"/postagens"}>
                                <Button variant="outlined" className='botao'> Ver Postagens</Button>
                            </Link>
                    </Box>
                </Grid>
                {/* <Grid item xs={6}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/Writer_s_block-amico.png?updatedAt=1681323288251" alt="Imagem Capa" className="fotoHome" />
                </Grid> */}
                <Grid xs={12} className='postagens'>
                    <ListaPostagem />
                </Grid>
            </Grid >
        </>
    );
}

export default Home;