import Tema from "./Tema";

interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  imagem: string;
  tema?: Tema | null
}

export default Postagem;