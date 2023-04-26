import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../service/Service';


function DeletarPostagem() {

  const history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
  
    const {id} = useParams<{id: string}>()
  
    const [post, setPosts] = useState<Postagem>();
  
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
  
    useEffect(() => {
      if (token === '') {
        alert('Você precisa estar logado.');
        history('/login');
      } 
    }, [token]);

    function sim() {
      deleteId(`/postagem/${id}`, {
        headers: {
          Authorization: token
        }
      })
      alert('Postagem deletada com sucesso.')
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