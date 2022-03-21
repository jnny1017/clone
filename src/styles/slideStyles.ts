import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out 0s;
`;

export const Name = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.45;
  color: ${COLORS.black};
  text-overflow: ellipsis;
  letter-spacing: normal;
  word-break: break-all;
  overflow-wrap: break-word;
`;

export const Price = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
`;

export const Discount = styled.span`
  color: ${COLORS.orange};
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 7px;
}
`;

export const DiscountPrice = styled.span`
  color: ${COLORS.black};
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
`;
