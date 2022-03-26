import styled from 'styled-components';
import { COLORS } from './colorStyles';

export const Counter = styled.div`
  display: flex;
  border: 1px solid #dddfe1;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
`;

export const Input = styled.input`
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  font-size: 14px;
  text-align: center;
`;
