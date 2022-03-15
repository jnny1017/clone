import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import { CollectionSectionContainer } from 'components/main/randomCollection';
import Lazy from 'components/lazy/LazyComponent'
import * as S from 'styles/mainStyles';
import LazyImage from 'components/lazy/LazyImg'

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <Lazy>
          <MdChoiceSection />
        </Lazy>
        {[...Array(50).keys()].map(i => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/1000/1000?random=${i}`}
            alt={`Random image ${i}`}
          />
        ))}
      </S.Main>
    </>
  );
}
