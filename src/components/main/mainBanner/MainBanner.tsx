import { Slider } from 'components/main/mainBanner/Slider';
import { mainBannerFixture } from 'pages/main/data';
import { StyledMainBanner } from 'styles/mainStyles';

export function MainBanner() {
  return (
    <StyledMainBanner>
      <Slider
        slides={mainBannerFixture}
      />
    </StyledMainBanner>
  )
}
