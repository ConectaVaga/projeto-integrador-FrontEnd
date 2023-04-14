import React from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#EBF2F2" }} >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1d3557", fontWeight: "bold" }}>
                           O que gostaria de compartilhar?
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1d3557", fontWeight: "bold" }}>
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <Button variant="outlined" style={{ borderColor: "#1d3557", backgroundColor: "#a8dadc", color: "#1d3557" }}> Ver Postagens</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" style={{ borderColor: "#1d3557", backgroundColor: "#a8dadc", color: "#1d3557" }}> Nova Postagem</Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" style={{ borderColor: "#1d3557", backgroundColor: "#a8dadc", color: "#1d3557" }}>Postagem Conecta</Button>
                        </Box>
                    </Box>
                </Grid>
                
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;