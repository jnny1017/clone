import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Row = styled.div`
  display: flex;
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
  margin: 22px 0;
  font-weight: 700;
  font-size: 14px;
  color: ${COLORS.gray};
`;

export const Price = styled.strong`
  font-size: 16px;
  color: ${COLORS.gray};
  text-decoration: line-through;
`;

export const DiscountRate = styled.strong`
  font-weight: 700;
  font-size: 28px;
  color: #fa622f;
  color: ${COLORS.orange};
`;

export const DiscountPrice = styled.strong`
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.black};
`;
