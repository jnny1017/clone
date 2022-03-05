import Slider from '../../components/slider';
import { mainBannerFixture } from '../../fixtures';
import { MainBanner } from '../../styles/mainStyles';

export default function MainPage() {
  return (
    <MainBanner>
      <Slider
        slides={mainBannerFixture.data.map(({ image_url }) => image_url)}
      />
    </MainBanner>
  );
}
