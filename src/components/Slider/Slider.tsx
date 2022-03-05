import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
  slides: string[];
}

export default function Slider({ slides }: Props) {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {slides.map((slideContent: string, index: number) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <img src={slideContent} alt="메인배너 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
