import React from 'react';
import EpisodeItem from './EpisodeItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const SeasonItem = (props) => {

  const {season, episodes} = props;

  return (
    <AccordionWrapper>
      <AccordionHeader expandIcon={<ExpandMoreIcon />}>
         <h1>Season: {season}</h1> 
      </AccordionHeader>
      <AccordionDetails>
        {   episodes.map((episode) => {
              return <EpisodeItem key={episode.episode_id} episode={episode}/> 
            })
        } 
      </AccordionDetails>
  </AccordionWrapper> 
  )
}

export default SeasonItem;

const AccordionWrapper = styled(Accordion)`
  border: 1px solid lightgreen;
  margin: 5px 0;
`
const AccordionHeader = styled(AccordionSummary)`
  h1 {
    color: green;
    margin: 0;
  }
`
