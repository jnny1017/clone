import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Product } from 'pages/main/models'
import * as S from 'styles/slideStyles'

interface Props {
  selectedCode: string,
  slides: Product[],
}

export function MdChoiceList({ slides, selectedCode }: Props) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={18}
      navigation={true}
      modules={[Navigation]}
    >
      {slides.filter((slide) => slide.code.includes(selectedCode)).map((slide, index) => (
        <SwiperSlide
          key={index}
        >
          <S.Slide>
            <S.Thumbnail src={slide.list_image_url} alt="md의 추천 상품" />
            <S.Name>{slide.name}</S.Name>
            {slide.discount_rate !== 0 ?
              <>
                <div>
                  <S.Discount>{slide.discount_rate}%</S.Discount>
                  <S.DiscountPrice>{slide.discounted_price}원</S.DiscountPrice>
                </div>
                <S.Price>{slide.original_price}원</S.Price>
              </>
              : <S.DiscountPrice>{slide.original_price}원</S.DiscountPrice>
            }
          </S.Slide>
        </SwiperSlide>
      ))
      }
    </Swiper >
  )
}
