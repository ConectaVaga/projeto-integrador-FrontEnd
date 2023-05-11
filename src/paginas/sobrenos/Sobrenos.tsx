import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sobrenos.css'
import { Opacity } from '@material-ui/icons'


function Sobrenos() {
  return (
    <>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid xs={10} paddingTop={3} paddingBottom={5} style={{ color: '#0A0840' }}>

          <Box paddingX={8} justifyContent={'center'}>
            <Typography variant='h2' gutterBottom justifyContent={'center'} align='center' className='tituloSobreNos'>
              Quem somos:
            </Typography>
            <Grid>
              <Box>
                <Typography marginTop={5} variant='h6' justifyContent={'center'} align='center' style={{ background: '' }} >
                  <img src='https://cdn.discordapp.com/attachments/1070726708614934629/1101574421568831529/imagem_2023-04-28_152318226-removebg-preview.png'
                    alt='Conexão' />

                  <br /><br />

                  <p className="pSobreNos">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O projeto ConectaVaga é uma rede social desenvolvida com o intuito de promover a visibilidade, inclusão
                    e senso de pertencimento a grupos minoritários que estejam em situação de vulnerabilidade social ou econômica.
                    Buscando impactar positivamente o desenvolvimento pessoal e profissional dos nossos usuários, através da divulgação
                    de oportunidades de trabalho e capacitação, visando assim torná-los economicamente ativos e protagonistas de suas carreiras.
                  </p>


                  <br /><br />

                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                  >


                    <Grid item xs={4}>
                      <strong>Missão:</strong><br />
                      No ambiente digital, ser o meio que conecta pessoas em contextos de vulnerabilidade a oportunidades de trabalho.
                    </Grid>
                    
                    <Grid item xs={4}>
                      <strong>Valores:</strong><br />
                      Baseado na ética e responsabilidade social, valorizamos as diferenças e acreditamos em oportunidades iguais.
                    </Grid>

                    <Grid item xs={4}>
                      <strong>Propósito:</strong><br />
                      Contribuir no progresso de todos os nossos usuários, auxiliando na construção de um futuro próspero para toda a sociedade.
                    </Grid>

                  </Grid>
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
