// import { useCounterContext } from '../../contexts/Counter/WithCounter';
import Icon from '../Icon';
import Button from '../Button';
import * as S from '../../styles/counterStyles';
import { useEffect, useState } from 'react';
import { updateCartItemNum } from '../../store/cart/cartSlice';
import { useAppDispatch } from '../../store/store';

interface Props {
  count: number;
}

export default function Counter({ count }: Props) {
  const dispatch = useAppDispatch();

  const [updatedCount, setCount] = useState(count);

  const increment = () => setCount(updatedCount + 1);
  const decrement = () => setCount(updatedCount - 1);

  useEffect(() => {
    dispatch(updateCartItemNum(updatedCount));
  }, [updatedCount]);

  return (
    <S.Counter>
      <Button onClick={decrement}>
        <Icon imgSrc="ico_minus" />
      </Button>
      <S.Input type="number" value={updatedCount} readOnly />
      <Button onClick={increment}>
        <Icon imgSrc="ico_plus" />
      </Button>
    </S.Counter>
  );
}
