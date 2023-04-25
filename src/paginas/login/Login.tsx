import './Login.css'
import { Grid } from '@material-ui/core'
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import UsuarioLogin from '../../models/UsuarioLogin'
import { login } from '../../service/Service'
import Usuario from '../../models/Usuario'


function Login() {

    const history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token !== ''){
        history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login (`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!')
        }catch(error){
            alert('Dados do usuário são inconsistentes. Erro ao logar.')
        }
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                        <Box paddingX={12}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>
                            Seja bem vinde!
                        </Typography>
                    </Box>
                            <Typography variant='subtitle1' gutterBottom color={'textPrimary'} align='center'>Acesse sua conta agora mesmo</Typography>
                            <TextField id='usuario' value={userLogin.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='Nome' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign={'center'}>
                                    <Button type='submit' variant='contained' >Entrar</Button>
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