import * as S from '../../styles/counterStyles'

interface Props {
  count: number,
  onClickIncrement: () => void,
  onClickDecrement: () => void,
}

export default function Counter({ count, onClickIncrement, onClickDecrement }: Props) {
  return (
    <S.Counter>
      <S.Button
        type="button"
        onClick={onClickDecrement}
      >
        수량 감소
      </S.Button>
      <S.Input type="number" value={count} readOnly />
      <S.Button
        type="button"
        onClick={onClickIncrement}
      >
        수량 증가
      </S.Button>
    </S.Counter>
  );
}
