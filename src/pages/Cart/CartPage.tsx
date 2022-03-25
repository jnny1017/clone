import { useAppSelector } from '../../store/store';
import CartItem from './components/CartItem';
import * as S from '../../styles/cartStyles';

export default function CartPage() {
  const { cartInfo } = useAppSelector(
    state => state.cart
  );

  return (
    <>
      <S.PageTitle>장바구니</S.PageTitle>
      {cartInfo === null ?
        <S.EmptyData>장바구니에 담긴 상품이 없습니다.</S.EmptyData>
        : <CartItem data={cartInfo} />}
    </>
  )
}
