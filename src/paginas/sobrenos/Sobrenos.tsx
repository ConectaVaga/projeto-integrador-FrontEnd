import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sobrenos.css'

function Sobrenos() {
  return (
    <>
        <Grid container display={'flex'} justifyContent={'center'} className='fotoSobrenos'>
            <Grid xs={6} paddingTop={3} style={{ color: 'white' }}>
                
                <Box paddingX={8} justifyContent={'start'}>
                <Typography variant='h2' gutterBottom justifyContent={'start'} align='center'>Sobre nós</Typography>
                    <Typography marginTop={5} variant='h6' justifyContent={'center'} align='center'>
                        O projeto ConectaVaga é uma rede social desenvolvida com o intuito de 
                        promover a visibilidade, inclusão e senso de pertencimento a grupos 
                        minoritários que estejam em situação de vulnerabilidade social ou econômica. 
                        Buscando impactar positivamente o desenvolvimento pessoal e profissional dos 
                        nossos usuários, através da divulgação de oportunidades de trabalho e 
                        capacitação, visando assim torná-los economicamente ativos e protagonistas 
                        de suas carreiras.
                    </Typography>
                </Box>            
            </Grid>
            
        </Grid>
    </>
  )
}

export default Sobrenos