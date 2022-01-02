import React from 'react';
import styled from 'styled-components';


const PageHeader = (props) => {

  const {text, color} = props;

  return (
    <Header color={color}>
      <img src="/BreakingBad.jpg" alt="BreakingBad cover" />
      <div>
       <h1>{text}</h1> 
      </div>
    </Header>
  )
}

export default PageHeader;

const Header = styled.div`
  
  div {
    width: 100%;
    height: 40vh;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
  
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    transform: rotate(-2deg);
    font-family: monospace;
    text-transform: uppercase;
    text-align: center;  
  }

  img {
    position: absolute;
    right: 0;
    left: 0;
    opacity: 20%;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: top;
  }
`;
