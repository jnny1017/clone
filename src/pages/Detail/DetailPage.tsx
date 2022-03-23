import { useAppSelector } from '../../store/store';
import * as S from '../../styles/detailStyles';

export default function DetailPage() {
  const {
    name,
    short_description,
    list_image_url,
    discount_rate,
    discounted_price,
    original_price,
  } = useAppSelector(
    state => state.main.cartInfo
  );

  return (
    <S.Row>
      <S.Thumbnail>
        <S.Img src={list_image_url} alt="상품 이미지" />
      </S.Thumbnail>
      <div>
        <S.Title>{name}</S.Title>
        <S.Desc>{short_description}</S.Desc>
        <S.DiscountPrice>{discounted_price}원</S.DiscountPrice>
        <S.DiscountRate>{discount_rate}%</S.DiscountRate>
        <S.Price>{original_price}원</S.Price>
      </div>
    </S.Row>
  );
}

