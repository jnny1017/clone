import Counter from '../../../../components/Counter';
import Checkbox from '../../../../components/Checkbox';
import { WithCounter } from '../../../../contexts/Counter';
import * as S from '../../../../styles/cartStyles';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import { CartInfo } from '../../../Main/models';

interface Props {
  data: CartInfo[];
  onClickDelete: (name: string) => void;
}

function CartItem({ data, onClickDelete }: Props) {
  return (
    <>
      {data.map(({ name, list_image_url, discounted_price, original_price }: CartInfo) => {
        return (
          <S.Row key={name}>
            <Checkbox id={name} />
            <S.Thumbnail>
              <S.Img src={list_image_url} alt="상품 이미지" />
            </S.Thumbnail>
            <S.Title>{name}</S.Title>
            <Counter />
            <S.OriginalPrice>{original_price}원</S.OriginalPrice>
            <Button onClick={() => onClickDelete(name)}>
              <Icon imgSrc="ico_delete" />
            </Button>
          </S.Row>
        )
      })}
    </>
  );
}

export default WithCounter(CartItem);
