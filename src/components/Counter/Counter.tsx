import { useCounterContext } from '../../contexts/Counter/WithCounter';
import * as S from '../../styles/counterStyles'

export default function Counter() {
  const { count, setCount } = useCounterContext();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <S.Counter>
      <S.Button
        type="button"
        onClick={decrement}
      >
        수량 감소
      </S.Button>
      <S.Input type="number" value={count} readOnly />
      <S.Button
        type="button"
        onClick={increment}
      >
        수량 증가
      </S.Button>
    </S.Counter>
  );
}
