import { MainBannerSlider } from 'components/main/mainBanner/MainBannerSlider';
import { mainBannerData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function MainBanner() {
  return (
    <S.MainBanner>
      <MainBannerSlider
        slides={mainBannerData}
      />
    </S.MainBanner>
  )
}
