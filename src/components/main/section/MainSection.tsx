import { PropsWithChildren } from 'react'
import * as S from 'styles/mainStyles'

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function MainSection({ title, subtitle, children }: PropsWithChildren<Props>) {
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
