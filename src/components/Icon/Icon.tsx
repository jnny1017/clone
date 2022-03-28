interface Props {
  imgSrc: string;
}

const BASE_SRC = `/assets/img/`

export default function Icon({ imgSrc }: Props) {
  return (
    <img src={BASE_SRC + `${imgSrc}.svg`} alt="아이콘 이미지" />
  );
}
