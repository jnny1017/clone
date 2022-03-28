import Counter from '../../../../components/Counter';
import Checkbox from '../../../../components/Checkbox';
import * as S from '../../../../styles/cartStyles';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import { CartInfo } from '../../../../store/cart/cart.model';
interface Props {
  data: CartInfo[];
  onClickDelete: (name: string) => void;
}

function CartItem({ data, onClickDelete }: Props) {
  return (
    <>
      {data.map(({ name, list_image_url, original_price, count }: CartInfo) => {
        return (
          <S.Row key={name}>
            <Checkbox id={name} />
            <S.Thumbnail>
              <S.Img src={list_image_url} alt="상품 이미지" />
            </S.Thumbnail>
            <S.Title>{name}</S.Title>
            {<Counter count={count || 0} />}
            <S.OriginalPrice>{original_price}원</S.OriginalPrice>
            <Button onClick={() => onClickDelete(name)}>
              <Icon imgSrc="ico_delete" />
            </Button>
          </S.Row>
        );
      })}
    </>
  );
}

export default CartItem;
