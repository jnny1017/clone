import { useSelector } from 'react-redux'

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RootState } from 'store'
import { Product } from 'pages/main/models'
import * as S from 'styles/slideStyles'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
  data: Product[],
}

export function MdChoiceList({ data }: Props) {
  const filteredList = useSelector((state: RootState) => {
    const { code } = state.main;

    return data.filter(item => item.code === code);
  });

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={18}
      navigation={true}
      modules={[Navigation]}
    >
      {filteredList.map((slide, index) => (
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
