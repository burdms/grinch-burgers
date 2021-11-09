import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Banner = ( props ) => (
  <StyledBanner>
    <img src={props.img} alt={ props.alt } />
  </StyledBanner>
);
