import { PropsWithChildren } from 'react';
import * as S from '../../styles/modalStyles';

interface Props {
  title?: string;
}

export default function Modal({ title, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <S.ModalOverlay />
      <S.Modal>
        <div>{title}</div>
        <div>{children}</div>
      </S.Modal>
    </div>
  )
}
