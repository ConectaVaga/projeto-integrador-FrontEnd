import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';

function CadastroPostagem() {

    const history = useNavigate();
    
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )
    
    const { id } = useParams<{ id: string }>();
    
    const [temas, setTemas] = useState<Tema[]>([]);

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        imagem: '',
        tema: null
    });

    const [tema, setTema] = useState<Tema>({
        id: 0,
        categoria: '',
        nome: ''
    });








    return (
        <div>CadastroPostagem</div>
    )
}

export default CadastroPostagem