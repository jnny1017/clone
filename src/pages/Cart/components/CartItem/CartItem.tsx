import Counter from '../../../../components/Counter';
import Checkbox from '../../../../components/Checkbox';
import { WithCounter } from '../../../../contexts/Counter';
import { CartInfo } from '../../models';
import * as S from '../../../../styles/cartStyles';
import Icon from '../../../../components/Icon';
import IconButton from '../../../../components/IconButton';
import { cartData } from '../../../Main/data/cart.data';

interface Props {
  data: CartInfo;
}

function CartItem({ data }: Props) {

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
            <IconButton onClick={() => { }}>
              <Icon imgSrc="ico_delete" />
            </IconButton>
          </S.Row>
        )
      })}
    </>
  );
}

export default WithCounter(CartItem);
