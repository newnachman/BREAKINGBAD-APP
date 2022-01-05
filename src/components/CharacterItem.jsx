import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharacterItem = (props) => {

  const {character} = props;

  return (
    <ItemWrapper >
      <Link to={`/character/${character}`}>
          {character}
      </Link>
    </ItemWrapper>
  )
}

export default CharacterItem;

const ItemWrapper = styled.div `
  
  font-weight: 600;

  a {
    border-right: 3px solid #ff8000;
    background-color: #f6f6f6;
    box-shadow: 1px 1px 5px #cbcbcb;
    text-align: center;
    padding: 10px;
    transition: 300ms linear all;
    display: block;
  }

  a:hover {
      box-shadow: 4px 4px 4px 0px #8080806b;
      transform: rotate(1deg);
  }

  @media screen and (max-width: 700px){
    width: 100%;
    margin: 15px auto;
  }
`;
