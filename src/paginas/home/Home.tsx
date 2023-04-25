import React from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
            <Grid item xs={12}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/C%C3%B3pia_de_Banners.png?updatedAt=1681922292947" alt="Imagem Capa" className="fotoHome" />
                </Grid>
                <Grid xs={12} className='postagens'>     
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                            Postagens em Destaques
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom color="textPrimary" component="h4" align="center" className='subtitulo'>
                        Veja as postagens em destaque desta semana
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" marginBottom={3}>
                        <Box marginRight={1}>
                            <Button variant="outlined" className='botao'> Ver Postagens</Button>
                        </Box>
                        <Box marginRight={1}>
                            <Button variant="outlined" className='botao'> Nova Postagem</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" className='botao'>Postagem Conecta</Button>
                        </Box>
                    </Box>
                </Grid>
                
            </Grid>
        </>
    );
}

export default Home;