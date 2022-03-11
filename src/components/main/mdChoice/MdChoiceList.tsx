import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Product } from 'pages/main/models'
import { StyledSlide } from 'styles/mainStyles'
import { StyledThumbnail, StyledName, StyledPrice, StyledDiscount, StyledDiscountPrice } from 'styles/slideStyles'

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
          <StyledSlide>
            <StyledThumbnail src={slide.list_image_url} alt="md의 추천 상품" />
            <StyledName>{slide.name}</StyledName>
            {slide.discount_rate !== 0 ?
              <>
                <div>
                  <StyledDiscount>{slide.discount_rate}%</StyledDiscount>
                  <StyledDiscountPrice>{slide.discounted_price}원</StyledDiscountPrice>
                </div>
                <StyledPrice>{slide.original_price}원</StyledPrice>
              </>
              : <StyledDiscountPrice>{slide.original_price}원</StyledDiscountPrice>
            }
          </StyledSlide>
        </SwiperSlide>
      ))
      }
    </Swiper >
  )
}
