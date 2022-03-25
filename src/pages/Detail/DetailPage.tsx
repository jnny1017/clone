import { useAppSelector } from '../../store/store';
import Counter from '../../components/Counter';
import * as S from '../../styles/detailStyles';
import { WithCounter } from '../../contexts/Counter';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAddCart } from '../../store/cart/cartSlice';
import { CartInfo } from '../Cart/models';

function DetailPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { cartInfo } = useAppSelector(
    state => state.main
  );

  function onClickAddCart(cartInfo: CartInfo) {
    history.push(`cart`);
    dispatch(updateAddCart(cartInfo));
  }

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
          <Counter />
          <S.CartButton type="button" onClick={() => onClickAddCart(cartInfo)}> 장바구니 담기</S.CartButton>
        </S.Column>
      </S.Row>
    </>
  );
}

export default WithCounter(DetailPage);
