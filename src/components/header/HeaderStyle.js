import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: arial;
  padding: 10px;
`;

export const Price = styled.p`
  color: grey;
  font-size: 22px;
`;

export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;