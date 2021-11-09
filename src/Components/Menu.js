import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import banner from '../images/menu/banner.png';
import dbMenu from './DBMenu';

const MenuStyled = styled.main`
  margin-top: 80px;
  background-color: #E5E5E5;
`;

const Section = styled.section`
  padding: 17px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 6px;
  font-size: 30px;
  line-height: 53px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner img={banner} alt="Grinch Burgers — the most grinchy burgers. Trust me."/>
 
    <Section>
      <SectionTitle>Burgers</SectionTitle>
      <ListItem itemList={dbMenu.burger} />
    </Section>

    <Section>
      <SectionTitle>Drinks & Snacks</SectionTitle>
      <ListItem itemList={dbMenu.other} />
    </Section>
  </MenuStyled>
);
