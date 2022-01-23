import React from 'react';

import { Container } from './styles';

import { IoMdAirplane } from 'react-icons/io';
import { GiChocolateBar } from 'react-icons/gi';

function Content() {
  return (
    <Container>
      <div className="first">
        <p>Se você está pensando em viajar para países da Europa, como a Suíca ou a Bélgica, você tem diabete e vai ficar algumas semanas por lá... </p>
        <IoMdAirplane size={50} color='#04d261' />
      </div>
      <div className="second">
        <p>Fique trancado no hotel para que você não seje hipnotizado pelos chocolates deliciosos de lá.</p> 
        <GiChocolateBar size={50} color='#04d261' />
      </div>
    </Container>
  )
}

export default Content;