import React from 'react';
import styled from 'styled-components';
import CharactersList from './CharactersList';

const EpisodeCard = (props) => {

  const {episode} = props;

  return (
    <EpisodeCardWrapper>
      <EpisodeTitle>
        Episode {episode.episode} / <span>{episode.title}</span> / {episode.air_date}
      </EpisodeTitle>
      <CharactersList characters={episode.characters}/>
    </EpisodeCardWrapper>
  )
}

export default EpisodeCard;

const EpisodeCardWrapper = styled.div `
`;

const EpisodeTitle = styled.div `
  width: 100%;
  padding: 15px 15px;
  text-align: center;
  font-size: 1.3rem;
  background-color: #ff8000;
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