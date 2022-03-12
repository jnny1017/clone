import styled, { css } from 'styled-components';

export const MainBanner = styled.div`
  //TODO
`;

export const Main = styled.div`
  width: 1050px;
  margin: 72px auto 0;
`;

export const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryItem = styled.li`

`;

export const CategoryLink = styled.a<{ selected: boolean }>`
  display: block;
  padding: 10px 20px;
  border-radius: 22px;
  margin: 0px 5px 20px;
  font-size: 14px;
  height: 40px;
  line-height: 16px;
  background-color: #f7f7f7;
  color: ${COLORS.black};
  ${({selected}) => selected && css`
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
  `}
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 27px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #333;
  letter-spacing: -0.26px;
`;
