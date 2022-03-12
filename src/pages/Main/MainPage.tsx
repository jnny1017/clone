import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import * as S from 'styles/mainStyles';

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <MdChoiceSection />
      </S.Main>
    </>
  );
}
