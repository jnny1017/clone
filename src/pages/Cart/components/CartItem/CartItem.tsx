import Counter from '../../../../components/Counter';
import Checkbox from '../../../../components/Checkbox';
import { WithCounter } from '../../../../contexts/Counter';
import * as S from '../../../../styles/cartStyles';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import { cartData } from '../../../Main/data/cart.data';

function CartItem() {
  return (
    <>
      {cartData.map(({ name, list_image_url, discounted_price, original_price }) => {
        return (
          <S.Row key={name}>
            <Checkbox id={name} />
            <S.Thumbnail>
              <S.Img src={list_image_url} alt="상품 이미지" />
            </S.Thumbnail>
            <S.Title>{name}</S.Title>
            <Counter />
            <S.OriginalPrice>{original_price}원</S.OriginalPrice>
            <Button onClick={() => { }}>
              <Icon imgSrc="ico_delete" />
            </Button>
          </S.Row>
        )
      })}
    </>
  );
}

export default WithCounter(CartItem);
