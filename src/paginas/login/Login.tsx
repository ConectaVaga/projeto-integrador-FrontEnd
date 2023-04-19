import './Login.css'
import { Grid } from '@material-ui/core'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form>
                        <Box paddingX={12}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>
                            Seja bem vinde!
                        </Typography>
                    </Box>
                            <Typography variant='h4' gutterBottom color={'textPrimary'} align='center'>Entrar</Typography>
                            <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign={'center'}>
                               <Link to='/home'>
                                    <Button type='submit' variant='contained' color='primary' >Logar</Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle2' gutterBottom align='center'>Não tem uma conta?</Typography>

                            </Box>
                            <Link to={'/cadastroUsuario'}>
                                <Typography variant='subtitle2' gutterBottom align='center' className='texto'>Cadastre-se aqui</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagemLogin'>
                </Grid>
            </Grid>
        </>
    )
}

export default Login