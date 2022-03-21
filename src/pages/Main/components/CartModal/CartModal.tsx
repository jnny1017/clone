import Modal from '../../../../components/Modal';
import { useAppSelector } from '../../../../store/store';

import Counter from '../../../../components/Counter';
import * as S from '../../../../styles/cartModalStyles';
import useCounter from '../../../../hooks/Counter';

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

  const { count, increment, decrement } = useCounter();

  return (
    <Modal>
      <S.CartInner>
        <S.CartTitle>{name}</S.CartTitle>
        <S.Row>
          {discount_rate > 0 ? (
            <>
              <S.DiscountPrice>{discounted_price}원</S.DiscountPrice>
              <S.Price>{original_price}원</S.Price>
            </>
          ) : <S.DiscountPrice>{original_price}원</S.DiscountPrice>}
          <Counter
            count={count}
            onClickIncrement={increment}
            onClickDecrement={decrement}
          />
        </S.Row>
        <S.Row>
          <S.Text>합계</S.Text>
          {discount_rate > 0 ?
            <S.DiscountPrice>{discounted_price * count}원</S.DiscountPrice>
            : <S.DiscountPrice>{original_price * count}원</S.DiscountPrice>
          }
        </S.Row>
        <S.Row>
          <S.Button type="button" onClick={onClickModal}>취소</S.Button>
          <S.Button type="button">장바구니 담기</S.Button>
        </S.Row>
      </S.CartInner>
    </Modal>
  );
}
