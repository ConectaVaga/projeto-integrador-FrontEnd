import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' item xs={12}>
                    <Box style={{ backgroundColor: "#1d3557", height: "100%" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}> Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="http://www.facebook.com" target='blank'>
                                <FacebookIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="http://www.instagram.com" target='blank'>
                                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="http://www.linkedin.com" target='blank'>
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#1d3557", height: "100%" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align='center' gutterBottom style={{ color: "white" }}> 2023 Copyright</Typography>
                        </Box>
                        <Box>
                            <a target='blank' href="https://www.linkedin.com/in/muriloc-ribeiro/" >
                                <Typography variant='subtitle2' gutterBottom style={{ color: "white" }} align="center"> LinkedIn Desenvolvedor Murilo </Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer