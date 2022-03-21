import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateCode } from '../../store/main/mainSlice';
import { fetchMainBannerData, fetchMdChoiceCategoryData, fetchMdChoiceProductData, fetchRandomCollectionData } from '../../store/main/main.thunks';
import { useAppSelector } from '../../store/store';
import * as S from '../../styles/mainStyles';

import BannerSlider from '../../components/BannerSlider';
import PickSection from '../../components/PickSection';
import RandomCollectionSection from './components/RandomCollection'


export default function MainPage() {
  const dispatch = useDispatch();

  const { mainBannerData, mdChoiceCategoryData, mdChoiceProductData, randomCollectionData, randomCollectionData2 } = useAppSelector(
    state => state.main
  );

  useEffect(() => {
    dispatch(fetchMainBannerData());
    dispatch(fetchRandomCollectionData());
    dispatch(fetchMdChoiceCategoryData());
    dispatch(fetchMdChoiceProductData());

  }, [dispatch]);

  function handleClickCategory(code: string) {
    dispatch(updateCode(code));
  }

  return (
    <>
      <BannerSlider slides={mainBannerData} />
      <S.Main>
        <PickSection
          title="MD의 추천"
          categoryData={mdChoiceCategoryData}
          productData={mdChoiceProductData}
          onClick={handleClickCategory}
        />
        <RandomCollectionSection data={randomCollectionData} />
        <RandomCollectionSection data={randomCollectionData2} />
      </S.Main>
    </>
  );
}
