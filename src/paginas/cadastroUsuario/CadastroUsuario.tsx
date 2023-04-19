import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CadastroUsuario.css'
import { cadastroUsuario } from '../../service/Service'
import Usuario from '../../models/Usuario'

function CadastroUsuario() {

    const history = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if (confirmarSenha === usuario.senha) {
            try {
                await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
                alert('Usuário cadastrado com sucesso!')
            } catch (error) {
                alert('Dados inconsistentes. Verifique os campos.')
            }
        } else {
            alert('As senhas não coincidem.')
            setConfirmarSenha('')
            setUsuario({
                ...usuario,
                senha: ''
            })
        }
    }

    useEffect(() => {
        if (usuarioResult.id !== 0) {
            history('/login')
        }
    }, [usuarioResult])

    function back() {
        history('/login')
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">Cadastre-se</Typography>
                        <TextField id='nome' value={usuario.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='Nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' value={usuario.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='Usuário (endereço de e-mail)' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={usuario.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField id='foto' value={usuario.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='Foto (URL)' variant='outlined' name='foto' margin='normal' fullWidth />
                        <Box marginY={2} display={'flex'} justifyContent={'space-around'} gap={4}>

                            <Button onClick={back} size='large' variant='contained' color='error' fullWidth>
                                Cancelar
                            </Button>
                            <Button type='submit' size='large' variant='contained' fullWidth>Cadastrar</Button>

                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario