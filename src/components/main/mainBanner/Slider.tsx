import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { MainBanner } from '../../../pages/main/models'

interface Props {
  slides: Pick<MainBanner, 'data'>;
}

export function Slider({ slides }: Props) {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 2000 }}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {slides.data.map(({ id, image_url }, index) => (
        <SwiperSlide
          key={id}
          virtualIndex={index}
        >
          <img src={image_url} alt="메인배너 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
