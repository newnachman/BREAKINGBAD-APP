import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Waiting = (props) => {

  const {text} = props;

  return (
    <WaitingWrapper >
      {text}
      <div>
        <CircularProgress color="inherit"/>
      </div>
    </WaitingWrapper>
  )
}

export default Waiting;


const WaitingWrapper = styled.div `
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;

  div {
    margin-top: 30px;
  }
`;
