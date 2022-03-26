import { useCounterContext } from '../../contexts/Counter/WithCounter';
import Icon from '../Icon';
import IconButton from '../IconButton';
import * as S from '../../styles/counterStyles'


export default function Counter() {
  const { count, setCount } = useCounterContext();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <S.Counter>
      <IconButton onClick={decrement}>
        <Icon imgSrc="ico_minus" />
      </IconButton>
      <S.Input type="number" value={count} readOnly />
      <IconButton onClick={increment}>
        <Icon imgSrc="ico_plus" />
      </IconButton>
    </S.Counter>
  );
}
