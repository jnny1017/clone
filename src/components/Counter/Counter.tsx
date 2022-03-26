import { useCounterContext } from '../../contexts/Counter/WithCounter';
import Icon from '../Icon';
import Button from '../Button';
import * as S from '../../styles/counterStyles'


export default function Counter() {
  const { count, setCount } = useCounterContext();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <S.Counter>
      <Button onClick={decrement}>
        <Icon imgSrc="ico_minus" />
      </Button>
      <S.Input type="number" value={count} readOnly />
      <Button onClick={increment}>
        <Icon imgSrc="ico_plus" />
      </Button>
    </S.Counter>
  );
}
