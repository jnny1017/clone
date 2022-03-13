import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import { CollectionSectionContainer } from 'components/main/randomCollection';
import * as S from 'styles/mainStyles';

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <MdChoiceSection />
        <CollectionSectionContainer />
      </S.Main>
    </>
  );
}
