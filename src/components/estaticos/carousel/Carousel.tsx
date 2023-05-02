import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ListaPostagem from '../../postagens/listaPostagem/ListaPostagem';

function Carousel() {

  const items = [
    <>
      <ListaPostagem />
    </>
    
  ]

// https://www.npmjs.com/package/react-alice-carousel

  const responsivo = {
    0: {
        items: 1,
    },
    1024: {
        items: 3,
        itemsFit: 'contain',
    }
  }

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      infinite
      disableDotsControls={true}
      disableButtonsControls={true}
      autoPlayInterval={2500} />
      
  )
}

export default Carousel
