import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  width: 60px;
  height: 78px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.black};
`;

export const Price = styled.strong`
  font-size: 16px;
  color: ${COLORS.gray};
  text-decoration: line-through;
`;

export const OriginalPrice = styled.strong`
  font-size: 16px;
  color: ${COLORS.black};
  font-weight: 700;
`;

export const EmptyData = styled.div`
  padding: 115px 0 116px;
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.black};
  text-align: center;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: #333;
  line-height: 35px;
  text-align: center;
  letter-spacing: -1px;
`;
