import { Slider } from 'components/main/mainBanner/Slider';
import { mainBannerData } from 'pages/main/data';
import { StyledMainBanner } from 'styles/mainStyles';

export function MainBanner() {
  return (
    <StyledMainBanner>
      <Slider
        slides={mainBannerData}
      />
    </StyledMainBanner>
  )
}
