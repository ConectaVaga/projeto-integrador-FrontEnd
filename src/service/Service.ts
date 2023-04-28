import axios from "axios";

export const api = axios.create({
    baseURL: 'https://conectavaga.onrender.com'
})

export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const busca = async(url:any, setDado:any, headers: any) => {
        const resposta = await api.get(url, headers)
        setDado(resposta.data)
    }

export const buscaId = async(url:any, setDado:any, headers: any) => {
    const resposta = await api.get(url, headers)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, headers: any) => { 
    const resposta = await api.post(url, dados, headers)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, headers: any) => { 
    const resposta = await api.put(url, dados, headers)
    setDado(resposta.data)
}

export const deleteId = async(url: any, headers: any) => { 
    await api.delete(url, headers)
}