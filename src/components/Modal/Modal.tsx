import * as S from '../../styles/modalStyles';

interface Props {
  title?: string;
  children: React.ReactNode;
  onClickModal: () => void;
}

export default function Modal({ title, children, onClickModal }: Props) {
  return (
    <div>
      <S.ModalOverlay />
      <S.Modal>
        <div>
          {title}
          <S.CloseButton
            type="button"
            onClick={onClickModal}>
            <span>&times;</span>
          </S.CloseButton>
        </div>
        <div>
          {children}
        </div>
      </S.Modal>
    </div>
  )
}
