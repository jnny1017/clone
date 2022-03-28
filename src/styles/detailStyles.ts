import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  width: 430px;
  height: 552px;
  margin-right: 60px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: 24px;
  color: ${COLORS.black};
`;

export const Desc = styled.p`
  margin-top: 22px;
  font-weight: 700;
  font-size: 14px;
  color: ${COLORS.gray};
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;
`;

export const Price = styled.strong`
  font-size: 16px;
  color: ${COLORS.gray};
  text-decoration: line-through;
`;

export const DiscountRate = styled.strong`
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.orange};
`;

export const DiscountPrice = styled.strong`
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.black};
`;

export const CartButton = styled.button`
  width: 432px;
  height: 56px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  background-color: ${COLORS.purple};
  border: 1px solid ${COLORS.purple};
  cursor: pointer;
`;
