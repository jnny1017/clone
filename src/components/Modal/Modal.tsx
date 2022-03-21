import * as S from '../../styles/modalStyles';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: Props) {
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
