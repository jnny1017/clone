import { useAppSelector } from '../../../../store/store';

import Toast from '../../../../components/Toast'
import * as S from '../../../../styles/cartToastStyles';

export default function CartToast() {

  const {
    name,
    list_image_url
  } = useAppSelector(
    state => state.main.cartInfo
  );

  return (
    <Toast>
      <S.Inner>
        <S.ToastImg src={list_image_url} alt="상품 이미지" />
        <S.ToastDesc>
          <S.ToastName>{name}</S.ToastName>
          <S.ToastText>장바구니에 상품을 담았습니다.</S.ToastText>
          {/* TODO 장바구니에 있을 경우 아래 케이스 추가 */}
          {/* <S.ToastText>이미 담으신 상품이 있어 추가되었습니다.</S.ToastText> */}
        </S.ToastDesc>
      </S.Inner>
    </Toast>
  );
}
