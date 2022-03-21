import styled from 'styled-components';
import { COLORS } from './colorStyles';

export const Counter = styled.div`
  display: flex;
  width: 88px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 28px;
  height: 28px;
`;

export const Input = styled.input`
  width: 30px;
  height: 30px;
  margin-right: -1px;
  padding: 0 0 4px;
  border: 0;
  background-color: ${COLORS.white};
  font-size: 14px;
  color: ${COLORS.black};
  line-height: 18px;
  text-align: center;
`;
