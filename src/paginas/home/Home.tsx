import React from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#a8dadc" }} >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1d3557", fontWeight: "bold" }}>
                            Seja bem vinde!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1d3557", fontWeight: "bold" }}>
                            O que você está pensando? Escreva aqui!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <Button variant="outlined" style={{ borderColor: "#1d3557", backgroundColor: "#a8dadc", color: "#1d3557" }}> Ver Postagens</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" style={{ borderColor: "#1d3557", backgroundColor: "#a8dadc", color: "#1d3557" }}> Nova Postagem</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/Writer_s_block-amico.png?updatedAt=1681323288251" alt="Imagem Capa" className="fotoHome" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;