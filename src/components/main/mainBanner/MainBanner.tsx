import { Slider } from 'components/main/mainBanner/Slider';
import { mainBannerData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function MainBanner() {
  return (
    <S.MainBanner>
      <Slider
        slides={mainBannerData}
      />
    </S.MainBanner>
  )
}
