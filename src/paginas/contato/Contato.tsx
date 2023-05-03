import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Contato.css'
import { Opacity } from '@material-ui/icons'
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contato() {
    return (
        <>
            <Typography className='tituloctt'>Nosso Time</Typography>
            <Box className='textoConjunto'>
                <Typography paddingX={22} className='textoctt'>Com grande alegria gostariamos de contar que estamos
                    prestes a nos formar no curso Fullstack em Java. Foi uma jornada intensa, cheia de desafios, mas também muito
                    gratificante.
                </Typography>
                <br />
                <Typography paddingX={22} className='textoctt'>
                    Ao longo do curso, aprendemos uma variedade de habilidades e ferramentas que nos permitiram desenvolver
                    aplicações web completas, desde o frontend até o backend. Combinamos tecnologias como Java, HTML, CSS,
                    JavaScript, JPA, Spring e outras para criar soluções robustas e eficientes.
                </Typography>
                <br />
                <Typography paddingX={22} className='textoctt'>
                    Além disso, também tivemos a oportunidade de trabalhar em projetos em grupo, o que nos permitiu aprimorar
                    nossas habilidades de comunicação, colaboração e gerenciamento de projetos.
                </Typography>
            </Box>


            <Grid className='containerCtt' container xs={12} direction='row' alignItems='center' justifyContent='center'>

                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103016434931605514/Joao.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>João Kiala</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/jo%C3%A3o-kiala-vioka-panzo/'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/Joaopanzo261' target='blank'><GitHubIcon className='social' /></Link></li>
                    </ul>
                </Box>

                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1102734950358323260/imagem_2023-05-01_201442097-removebg-preview.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Murilo Ribeiro</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/murilo-ribeiro-528515156/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/MuRibeiro' target='blank'><GitHubIcon className='social' /></Link></li>
                    </ul>
                </Box>

                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103016433727852604/Natanael.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Natanael Bento</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/natanael-da-silva-bento-9422b21b2/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/natanael-bento' target='blank'><GitHubIcon className='social' /></Link></li>
                    </ul>
                </Box>



                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103021760607158342/Rafael2.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Rafael Duarte</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/rafael-duarte-8b58221ab/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/RafaelAstora' target='blank'><GitHubIcon className='social' /></Link></li>
                    </ul>
                </Box>


                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103016433971118180/Rebeca.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Rebeca Santana</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/rebecasantana/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/rebecasantana' target='blank'><GitHubIcon className='social' /></Link></li>
                    </ul>
                </Box>

                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103016434239545374/Rony.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Rony dos Santos</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/rony-dos-santos-teles-29649a172/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/ronyrst'><GitHubIcon className='social' target='blank' /></Link></li>
                    </ul>
                </Box>
                <Box mx={12} className='integrantes'>
                    <Box className='foto'>
                        <img src="https://cdn.discordapp.com/attachments/885611260702523445/1103016434604462110/Vitoria.png" alt="" />
                    </Box>
                    <Box className='integranteDetail'>
                        <h3>Vitoria Busch</h3>
                    </Box>
                    <ul>
                        <li><Link to='https://www.linkedin.com/in/vitoria-f-park-busch-6a015019b/' target='blank'><LinkedInIcon className='social' /></Link></li>
                        <li><Link to='https://github.com/vfpark'><GitHubIcon className='social' target='blank'  /></Link></li>
                    </ul>
                </Box>


            </Grid>
        </>
    )
}

export default Contato;