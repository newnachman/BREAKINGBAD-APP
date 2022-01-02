
import React from 'react';
import styled from 'styled-components';


const CharacterCard = (props) => {

  const {character} = props;

  return (
    <ContentContainer >
      <CardImage src={character.img}/>
      <CardContent>
        <CharacterTitle>
          {character.name} / <span>{character.nickname}</span> / ({character.birthday})
        </CharacterTitle>
          <CharacterStatus>
            Character status is: {character.status} 
          </CharacterStatus>
          <CharacterOccupation>
            <h3> Character occupation:</h3>
            <ul>
              {character.occupation.map((occupation) => {
                return <CharacterOccupationItem key={occupation}>{occupation}</CharacterOccupationItem>
              })} 
            </ul>
          </CharacterOccupation>
      </CardContent>
    </ContentContainer>
  )
}

export default CharacterCard;

const ContentContainer = styled.div`
  width: 70%;
  margin: 70px auto;

  @media screen and (max-width: 700px){
    width: 90%;
    margin: 30px auto;
  }
`;

const CardImage = styled.img `
  display: block;
  margin: auto;
  width: 50%;
  max-height: 550px;
  border-radius: 50%;
`;

const CardContent = styled.div `
  margin: auto;
  width: 80%;
  padding: 20px;

  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

const CharacterStatus = styled.div `
  text-align: center;
`;

const CharacterOccupation = styled.div `
  ul {
    padding-left: 0px;
  }
`;

const CharacterOccupationItem = styled.li `
  list-style-type: none;
  width: 100%;
  margin: 10px auto;
  text-align: center;
  padding: 15px 0;
  background-color: #f6f6f6;
  box-shadow: 1px 1px 5px #cbcbcb;
  border-right: 3px solid #31ff31;
`;

const CharacterTitle = styled.div `
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 1.3rem;
  background-color: #31ff31;
  transform: rotate(1deg);
  margin-bottom: 30px;

  span {
    font-size: 2rem;
    font-weight: 700;
    font-family: monospace;
    text-transform: uppercase;
    margin: 0 15px;
  }
`;
