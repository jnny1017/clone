import { Slider } from 'components/slider'
import * as S from 'styles/mainStyles'

export default function MainSection({ data }: any) {
  const { title, subtitle, data: { products } } = data;

  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Inner>
        <Slider data={products} />
      </S.Inner>
    </S.Section>
  )
}
