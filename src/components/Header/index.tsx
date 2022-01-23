import React from 'react';

import { Container } from './styles';
import { FaBloggerB } from 'react-icons/fa'

function Header() {
  return (
    <Container>
      <div>
        <h1> 
          Blog do Luisão 
          <FaBloggerB size={32} />
        </h1>
        <p> Pessoas com diabetes no turismo... </p>
        <p className="writer">
          Escrito por
          <a href='https://www.instagram.com/_arthur_luiz__/?hl=pt-br'> Arthur Luiz </a>
        </p>
      </div>
    </Container>
  )
}

export default Header;