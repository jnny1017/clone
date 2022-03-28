import { useAppSelector } from '../../store/store';
import Counter from '../../components/Counter';
import * as S from '../../styles/detailStyles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAddCart } from '../../store/cart/cartSlice';
import { CartInfo } from '../../store/cart/cart.model';

function DetailPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { cartInfo } = useAppSelector(state => state.main);
  const { updatedCount } = useAppSelector(state => state.cart);

  const alertToDuplicateItems = (cartList: CartInfo[]) => {
    const duplicated = cartList.some(
      (item: any) => item.name === cartInfo.name
    );

    if (duplicated) {
      //TODO Toast모달로 리팩터링
      alert('이미 담으신 상품이 있어 추가되었습니다.');
    }
  };

  const goToCart = () => {
    history.push(`cart`);
  };

  const onClickAddCart = (cartInfo: CartInfo) => {
    dispatch(updateAddCart(cartInfo));

    if (cartInfo !== null) {
      const cartList = JSON.parse(localStorage.getItem('cartInfo')!) || [];
      alertToDuplicateItems(cartList);

      const data = [...cartList, { ...cartInfo, count: updatedCount }];
      localStorage.setItem('cartInfo', JSON.stringify(data));

      goToCart();
    }
  };

  return (
    <>
      <S.Row>
        <S.Thumbnail>
          <S.Img src={cartInfo.list_image_url} alt="상품 이미지" />
        </S.Thumbnail>
        <S.Column>
          <S.Title>{cartInfo.name}</S.Title>
          <S.Desc>{cartInfo.short_description}</S.Desc>
          <S.PriceInfo>
            <S.DiscountPrice>{cartInfo.discounted_price}원</S.DiscountPrice>
            <S.DiscountRate>{cartInfo.discount_rate}%</S.DiscountRate>
            <S.Price>{cartInfo.original_price}원</S.Price>
          </S.PriceInfo>
          <Counter count={0} />
          <S.CartButton type="button" onClick={() => onClickAddCart(cartInfo)}>
            {' '}
            장바구니 담기
          </S.CartButton>
        </S.Column>
      </S.Row>
    </>
  );
}

export default DetailPage;
