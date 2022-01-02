import React from 'react';
import styled from 'styled-components';


const PageFooter = (props) => {

  const {color} = props;

  return (
    <Footer color={color}>
      Breakingbad App ©
    </Footer>
  )
}

export default PageFooter;

const Footer = styled.div`
  width: 100%;
  background-color: ${ props => props.color};
  text-align: center;
  color: white;
  font-size: 0.8rem;
  padding: 7px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: 0.3s all;

  &:hover {
    padding: 9px 0;
  }
`;