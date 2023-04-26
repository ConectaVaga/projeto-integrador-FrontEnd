import React from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";
import ListaTema from "../../components/temas/listaTema/ListaTema";

function Home() {
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
                            <Button variant="outlined" className='botao'> Ver Postagens</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" className='botao'> Nova Postagem</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" className='botao'>Postagem Conecta</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/Writer_s_block-amico.png?updatedAt=1681323288251" alt="Imagem Capa" className="fotoHome" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <ListaPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;