import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Modal = styled.div`
  z-index: 11;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 440px;
  min-height: 100px;
  max-height: 600px;
  border-radius: 12px;
  background-color: ${COLORS.white};
  transform: translate(-50%, -50%);
`;

export const ModalOverlay = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.black};
  opacity: 0.5;
`;

//TODO z-index 공통 스타일로 정리하기
export const CloseButton = styled.button`
  z-index: 100;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
`;
