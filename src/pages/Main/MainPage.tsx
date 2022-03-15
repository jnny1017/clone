import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import { CollectionSectionContainer } from 'components/main/randomCollection';
import LazyComponent from 'components/lazy'
import * as S from 'styles/mainStyles';

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <LazyComponent>
          <MdChoiceSection />
        </LazyComponent>
        {[...Array(5).keys()].map(i => (
          <LazyComponent key={i}>
            <CollectionSectionContainer />
          </LazyComponent>
        ))}
      </S.Main>
    </>
  );
}
