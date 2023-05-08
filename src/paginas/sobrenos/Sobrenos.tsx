import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sobrenos.css'
import { Opacity } from '@material-ui/icons'


function Sobrenos() {
  return (
    <>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid xs={6} paddingTop={3} style={{ color: '#0A0840' }}>

          <Box paddingX={8} justifyContent={'center'}>
            <Typography variant='h2' gutterBottom justifyContent={'center'} align='center'>Quem somos:</Typography>
           <Grid>
            <Box>
              <Typography marginTop={5} variant='h6' justifyContent={'center'} align='center' style={{ background: '' }} >
                <img src='https://cdn.discordapp.com/attachments/1070726708614934629/1101574421568831529/imagem_2023-04-28_152318226-removebg-preview.png' 
                     alt='Conexão' />

                <br></br>
                O projeto ConectaVaga é uma rede social desenvolvida com o intuito de promover a visibilidade, inclusão
                e senso de pertencimento a grupos minoritários que estejam em situação de vulnerabilidade social ou econômica.
                Buscando impactar positivamente o desenvolvimento pessoal e profissional dos nossos usuários, através da divulgação
                de oportunidades de trabalho e capacitação, visando assim torná-los economicamente ativos e protagonistas de suas carreiras.

                <Box>
                  <Grid>
                  <br></br>
                  <strong>Valores</strong>: baseado na ética e responsabilidade social, valorizamos as diferenças e acreditamos em oportunidades iguais.

                  <br></br>
                  <strong> Missão</strong>: no ambiente digital, ser o meio que conecta pessoas de todos os contextos de vulnerabilidades a oportunidades de trabalho.

                  <br></br>
                  <strong>Propósito</strong>: contribuir na construção de um futuro próspero para as pessoas, e um progresso para todos nossos usuários.
              
                  </Grid>
                </Box>
              </Typography>

              </Box>
              </Grid>

          </Box>

        </Grid>
      </Grid>


    </>
  )
}

export default Sobrenos