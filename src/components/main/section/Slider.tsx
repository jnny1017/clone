import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { StyledSlide } from '../../../styles/mainStyles'

interface Props {
  slides: any;
}

export function Slider({ slides }: Props) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={18}
      navigation={true}
      modules={[Navigation]}
    >
      {slides.map((slide: any, index: number) => (
        <SwiperSlide
          key={index}
        >
          <StyledSlide>
            <img src={slide.list_image_url} alt="md의 추천 상품" />
            <strong>{slide.name}</strong>
            <span>{slide.discount_rate}</span>
            <span>{slide.original_price}원</span>
            <span>{slide.discounted_price}원</span>
          </StyledSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
