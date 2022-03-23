import styled from 'styled-components';

import { COLORS } from './colorStyles';

export const Toast = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  display: block;
  overflow: hidden;
  padding: 20px 0 20px 20px;
  width: 348px;
  border: 1px solid #ddd;
  background-color: ${COLORS.white};
`;
