import styled from 'styled-components';

import { Color } from './colorStyles'


export const StyledHeader = styled.header`
  position: relative;
  width: 1050px;
  margin: 0 auto;
`;

export const StyledLogoLink = styled.a`
  display: block;
  width: 103px;
  height: 79px;
  margin: 0 auto;
`;

export const StyledLogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledMenu = styled.ul`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
`;

export const StyledMenuItem = styled.li`
  display: flex;
  font-size: 12px;

  &:before {
    content: "";
    width: 1px;
    height: 13px;
    margin: 0 12px;
    background-color: #d8d8d8;
  }

  &:first-child{
    color: ${Color.purple};

    &:before{
      content: none;
    }
  }
`;

export const StyledGnb = styled.ul`
  position:relative;
  display: flex;
  padding: 20px 0;
`;

export const StyledGnbItem = styled.li`
  margin-left: 72px;
  font-size: 16px;
  font-weight: 700;
  color: #333;

  &:first-child {
    margin-left: 0;
  }
`;

export const StyledCategory = styled.div<{selected : boolean}>`
  display: ${({selected}) => selected ? 'block;' : 'none;'}
  z-index: 10;
  position: absolute;
  top: 55px;
  left: 0;
  border: 1px solid #ddd;
  background:#fff;
`;

export const StyledCategoryItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 14px;
`;

export const StyledIcon = styled.i`
  width: 24px;
  height: 24px;
  background-size: 100% 100%;
`;

export const StyledName = styled.div`
  padding-left:10px;
  font-weight: 400;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
`;

export const StyledSubCategory = styled.ul<{ selected?: any }>`
  display: ${({selected}) => selected ? 'block;' : 'none;'}
  z-index: 10;
  position: absolute;
  left: 100%;
  top: 0;
  width: 248px;
  height: 100%;
  padding: 0 0 0 20px;
  background: #fff;
`;

export const StyledSubCategoryItem = styled.li`
  display: block;
  overflow: hidden;
  height: 40px;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
  line-height: 18px;
  cursor: pointer;
`;
