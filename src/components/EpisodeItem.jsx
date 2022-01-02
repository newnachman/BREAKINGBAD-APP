import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';


const EpisodeItem = (props) => {
  
  const {episode} = props;
  
  return (
    <Card elevation={3}>
      <h3>
          Episode {episode.episode}
      </h3>
      <Link to={`/episode/${episode.episode_id}`}>
        {episode.title}
      </Link>
      <h5>Air Date: {episode.air_date}</h5>
    </Card>
  )
}

export default EpisodeItem;

const Card = styled(Paper)`
  padding: 5px 25px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  a {
    background-color: grey;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-weight: 600;
    transition: 300ms linear all;
    color: white;
  } 

  a:visited {
    color: white;
  }
  
  a:hover {
    color: white;
    box-shadow: 4px 4px 4px 0px #8080806b;
    transform: rotate(1deg);
  }

  @media screen and (max-width: 700px){
    align-items: center;
    flex-direction: column;

    a, h5, h3 {
      width: 100%;
      text-align: center;
    }

    a {
      padding: 15px 5px;
    }
  }
`;
