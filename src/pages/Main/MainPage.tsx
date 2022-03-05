import Slider from '../../components/slider';
import { mainBannerFixture } from '../../fixtures';
import { StyledMainBanner } from '../../styles/mainStyles';

export default function MainPage() {
  return (
    <StyledMainBanner>
      <Slider
        slides={mainBannerFixture}
      />
    </StyledMainBanner>
  );
}
