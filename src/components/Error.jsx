import React from 'react';
import styled from 'styled-components';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Error = (props) => {

  const {text} = props;

  return (
    <ErrorWrapper>
      {text}
      <div>
        <ErrorOutlineIcon sx={{ fontSize: 50 }} />
      </div>
    </ErrorWrapper>
  )
}

export default Error;

const ErrorWrapper = styled.div `
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  color: red;

  div {
    margin-top: 30px;
  }
`;

