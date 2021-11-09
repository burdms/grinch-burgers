import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  z-index: 1;
  margin: 0 30px 30px 0;
  width: 400px;
  height: 155px;
  padding: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: white;
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: black;
    opacity: 0.5;
  }

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 5px grey;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id}
        img={ item.img }>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB'})}</p>
      </Item>
    )) }
  </List>
);