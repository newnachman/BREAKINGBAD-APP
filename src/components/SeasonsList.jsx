import React from 'react';
import SeasonItem from './SeasonItem';
import styled from 'styled-components';


const SeasonsList = (props) => {

  const {episodesListBySeason} = props;

  return (
    <ContentContainer>
      {Object.keys(episodesListBySeason).map((season) => {
          return (
           <SeasonItem key={season} season={season} episodes={episodesListBySeason[season]}/>
          ) 
        }
      )}
    </ContentContainer>
  )
}

export default SeasonsList

const ContentContainer = styled.div`
  width: 70%;
  margin: 70px auto;

  @media screen and (max-width: 700px){
    width: 90%;
    margin: 30px auto;
  }
`