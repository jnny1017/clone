import { Slider } from 'components/main/mainBanner/Slider';
import { mainBannerData } from 'pages/main/data';

export function MainBanner() {
  return (
    <Slider
      slides={mainBannerData}
    />
  )
}
