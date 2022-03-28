import { useAppSelector } from '../../store/store';
import CartItem from './components/CartItem';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import * as S from '../../styles/cartStyles';

export default function CartPage() {
  const cartList = JSON.parse(localStorage.getItem('cartInfo')!) || [];

  function handleProductDelete(name: string) {
    console.log(name);
  }

  return (
    <>
      {console.log(cartList)}
      <S.PageTitle>장바구니</S.PageTitle>
      <Checkbox id="allSelect" label="전체선택" />
      <Button onClick={() => {}}>선택삭제</Button>
      {cartList === null ? (
        <S.EmptyData>장바구니에 담긴 상품이 없습니다.</S.EmptyData>
      ) : (
        <CartItem data={cartList} onClickDelete={handleProductDelete} />
      )}
    </>
  );
}
