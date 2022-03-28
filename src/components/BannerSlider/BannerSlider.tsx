import { MainBannerInfo } from '../../pages/Main/models';
import { Lazy, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';

interface Props {
  slides: Pick<MainBannerInfo, 'data'>;
}

export default function BannerSlider({ slides }: Props) {
  // refactor: banner image preloading
  useEffect(() => {
    const img = new Image();

    slides.data.forEach(({ image_url }) => {
      img.src = image_url;
    });
  }, [slides.data.length]);

  return (
    <Swiper
      lazy={true}
      loop={true}
      autoplay={{ delay: 2000 }}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Lazy, Pagination, Navigation, Autoplay]}
    >
      {slides.data.map(({ id, image_url }, index) => (
        <SwiperSlide key={id} virtualIndex={index}>
          <img src={image_url} alt="메인배너 이미지" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
