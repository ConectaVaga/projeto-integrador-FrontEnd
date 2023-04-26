import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Footer from "./components/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobrenos from "./paginas/sobrenos/Sobrenos";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/temas/listaTema/listarTema";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagem from "./components/postagens/listaPostagem/ListaPostagem";
import CadastroPostagem from "./components/postagens/cadastroPostagem/CadastroPostagem";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />}/>
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
