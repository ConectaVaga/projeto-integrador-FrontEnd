import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function DeletarPostagem() {

    const history = useNavigate();
    
    const token = useSelector<TokenState, TokenState["token"]>(
      (state) => state.token
    )
    
    const {id} = useParams<{id: string}>()
  
    const [post, setPosts] = useState<Postagem>();

    useEffect(() => {
      if (token === '') { 
          toast.error('Você precisa estar logado!', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: 'colored',
              progress: undefined
          });
        history('/login');
      }
    }, [token])
  
   /* useEffect(() => {
      if (id !== undefined){
        getPostById(id)
      }
    })*/

// A ALANILISAR:
    async function getPostById(id: string) {
      await buscaId(`/postagens/${id}`, setPosts, {
        headers: {
          Authorization: token
        }
      })
    }

    useEffect(() => {
      if (id !== undefined){
        getPostById(id)
      }
    })
  // ANALISAR GETPOST
    
    function sim() {
      deleteId(`/postagem/${id}`, {
        headers: {
          Authorization: token
        }
      })
      toast.success('Postagem deletada com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
    })
      history('/postagem')
    }
  
    function nao(){
      history('/posts')
    }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;