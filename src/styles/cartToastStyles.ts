import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Inner = styled.div`
  display: flex;
`;

export const ToastImg = styled.img`
  width: 46px;
  height: 60px;
`;

export const ToastDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0 20px;
`;

export const ToastName = styled.span`
  display: block;
  overflow: hidden;
  width: 100%;
  font-size: 14px;
  color: ${COLORS.gray};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ToastText = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: ${COLORS.black};
`;
