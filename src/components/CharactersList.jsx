import React from 'react';
import styled from 'styled-components';
import CharacterItem from './CharacterItem';


const CharactersList = (props) => {

  const {characters} = props;
  return (
    <CharactersListWrapper>
      <h3>Characters:  </h3><span>(click on a name to display)</span>
      <GridWrapper>
      {characters.map((character) => {
        return (
          <CharacterItem key={character} character={character}/>
        )
      })
    }
    </GridWrapper>
  </CharactersListWrapper>
  )
}

export default CharactersList;

const CharactersListWrapper = styled.div `
  h3 {
    display: inline-block;
  }
  
   span {
    display: inline-block;
    margin-left: 30px;
   }
`;

const GridWrapper = styled.div `
  display: grid;
  grid-column-gap: 5%;
  grid-row-gap: 50px;
  grid-template-columns: 30% 30% 30%;

  @media screen and (max-width: 700px){
    display: block;
  }
`;