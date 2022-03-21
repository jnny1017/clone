import Modal from '../../../../components/Modal';
import { useAppSelector } from '../../../../store/store';

import * as S from '../../../../styles/cartModalStyles'

interface Props {
  onClickModal: () => void
}

export default function CartModal({ onClickModal }: Props) {
  const {
    name,
    discount_rate,
    discounted_price,
    original_price,
  } = useAppSelector(
    state => state.main.cartInfo
  );

  return (
    <Modal onClickModal={onClickModal}>
      <S.CartInner>
        <S.CartTitle>{name}</S.CartTitle>
        <S.Row>
          {discount_rate > 0 ? (
            <>
              <S.DiscountPrice>{discounted_price}원</S.DiscountPrice>
              <S.Price>{original_price}원</S.Price>
            </>
          ) : <S.DiscountPrice>{original_price}원</S.DiscountPrice>}
        </S.Row>

        <S.Row>
          합계
          {discount_rate > 0 ?
            <S.DiscountPrice>{discounted_price}원</S.DiscountPrice>
            : <S.DiscountPrice>{original_price}원</S.DiscountPrice>
          }
        </S.Row>
      </S.CartInner>
    </Modal>
  );
}
