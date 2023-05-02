import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


function Carousel(){

    const items = [
        
        <p>  O projeto ConectaVaga é uma rede social desenvolvida com o intuito de promover a visibilidade, inclusão
        e senso de pertencimento a grupos minoritários que estejam em situação de vulnerabilidade social ou econômica. 
        Buscando impactar positivamente o desenvolvimento pessoal e profissional dos nossos usuários, através da divulgação 
        de oportunidades de trabalho e capacitação, visando assim torná-los economicamente ativos e protagonistas de suas carreiras. </p>,

        <p> <strong>Valores</strong>: baseado na ética e responsabilidade social, valorizamos as diferenças e acreditamos em oportunidades iguais.

        <br></br>
       <strong> Missão </strong>: No ambiente digital, ser o meio que conecta pessoas de todos os contextos de vulnerabilidades a oportunidades de trabalho.

       <br></br>
       <strong>Propósito</strong>: contribuir na construção de um futuro próspero para as pessoas, e um progresso para todos nossos usuários.
        </p>,

        <p>  <img src='https://cdn.discordapp.com/attachments/1070726708614934629/1101574421568831529/imagem_2023-04-28_152318226-removebg-preview.png' alt='Conexão' /> </p>,
      ];
    return (
        <AliceCarousel mouseTracking items={items} autoPlay infinite autoPlayInterval={10000} />
    )
}

export default Carousel;