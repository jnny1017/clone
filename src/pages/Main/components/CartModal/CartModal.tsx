import Modal from '../../../../components/Modal';

interface Props {
  onClickModal: () => void
}

export default function CartModal({ onClickModal }: Props) {

  return (
    <Modal onClickModal={onClickModal}>
      장바구니 모달 내용
    </Modal>
  );
}
