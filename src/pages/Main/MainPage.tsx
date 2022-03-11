import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import { StyledMain } from 'styles/mainStyles';

export default function MainPage() {
  return (
    <StyledMainBanner>
      <Slider
        slides={mainBannerFixture}
      />
    </StyledMainBanner>
  );
}
