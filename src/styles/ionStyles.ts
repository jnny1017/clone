import styled, { css } from 'styled-components';

export const Icon = styled.span`
  ${({ type }: any) => {
    return css`
      width: ${type.width};
      height: ${type.height};
      display: inline-block;
      background-image: ${type.imgSrc};
      background-size: cover;
      background-position: center;
    `;
  }}
`;
