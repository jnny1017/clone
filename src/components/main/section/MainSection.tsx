import * as S from 'styles/mainStyles'

interface Props {
  title: string;
  subtitle?: string;
  children: any;
}

export default function MainSection({ title, subtitle, children }: Props) {
  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Inner>
        {children}
      </S.Inner>
    </S.Section>
  )
}
