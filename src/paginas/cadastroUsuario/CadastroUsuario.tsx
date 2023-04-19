import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CadastroUsuario.css'
//import User from '../../models/User';
//import { cadastroUsuario } from '../../services/Service';

 function CadastroUsuario() {
        return (
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">Cadastre-se</Typography>
                            <TextField id='nome' label='Nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField id='usuario' label='Usuário (endereço de e-mail)' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <TextField id='foto' label='Foto (URL)' variant='outlined' name='foto' margin='normal' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                        Cadastrar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        );
    }