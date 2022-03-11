import styled from 'styled-components';

export const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out 0s;
`;

export const StyledName = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.45;
  color: #333;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-all;
  overflow-wrap: break-word;
`;

export const StyledPrice = styled.div`
  color: #999999;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;
    margin-top: 2px;
`;

export const StyledDiscount = styled.span`
  color: #fa622f;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 7px;
}
`;

export const StyledDiscountPrice = styled.span`
  color: #333333;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
`;
