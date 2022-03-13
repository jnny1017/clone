import { MainBanner } from 'components/main/mainBanner';
import { MdChoiceSection } from 'components/main/mdChoice';
import { CollectionSection } from 'components/main/randomCollection';
import React from 'react';
import * as S from 'styles/mainStyles';

export default function MainPage() {
  return (
    <>
      <MainBanner />
      <S.Main>
        <MdChoiceSection />
        <CollectionSection />
      </S.Main>
    </>
  );
}
