import styled from 'styled-components';
import { COLORS } from './colorStyles';

export const CartInner = styled.div`
  padding: 30px;
`;

export const CartTitle = styled.p`
  font-size: 14px;
  color: ${COLORS.black};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const DiscountPrice = styled.strong`
  font-size: 14px;
  color: ${COLORS.black};
  font-weight: 800;
`;

export const Price = styled.span`
  padding-right: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
`;

export const Text = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

export const Button = styled.button`
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
`;
