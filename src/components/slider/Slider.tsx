import { useHistory } from 'react-router-dom';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderItemModel } from './models/sliderItem.model';
import * as S from '../../styles/slideStyles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../store/main/mainSlice';

interface Props {
  data: SliderItemModel[];
  onClickModal: (slide: SliderItemModel) => void
}

export default function Slider({ data, onClickModal }: Props) {
  const history = useHistory();

  const dispatch = useDispatch();


  function handleClickProduct(slide: SliderItemModel) {
    dispatch(updateCart(slide));
    history.push(`detail`)
  }

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={18}
      navigation={true}
      modules={[Navigation]}
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <S.Slide>
            <S.Thumbnail onClick={() => handleClickProduct(slide)}>
              <S.ThumbnailImg src={slide.list_image_url} alt="상품 이미지" />
              <S.CartButton
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onClickModal(slide);
                }}
              >
                <S.Blind>
                  장바구니에 담기
                </S.Blind>
              </S.CartButton>
            </S.Thumbnail>
            <S.Name>{slide.name}</S.Name>
            {slide.discount_rate > 0 ? (
              <>
                <div>
                  <S.Discount>{slide.discount_rate}%</S.Discount>
                  <S.DiscountPrice>{slide.discounted_price}원</S.DiscountPrice>
                </div>
                <S.Price>{slide.original_price}원</S.Price>
              </>
            ) : (
                <S.DiscountPrice>{slide.original_price}원</S.DiscountPrice>
              )}
          </S.Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
