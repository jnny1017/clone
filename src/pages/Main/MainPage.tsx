import { MainBanner } from 'components/main/mainBanner';
import { Section } from 'components/main/mdChoice';
import * as S from 'styles/mainStyles';

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <Section />
      </S.Main>
    </>
  );
}
