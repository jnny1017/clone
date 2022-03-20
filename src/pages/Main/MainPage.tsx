import BannerSlider from 'components/BannerSlider';
import * as S from 'styles/mainStyles';
import {
  mainBannerData,
  mdChoicesCategoriesData,
  mdChoicesProductsData,
} from './data';
import PickSection from '../../components/PickSection';
import { useDispatch } from 'react-redux';
import { updateCode } from 'store/main/mainSlice';
import RandomCollectionSection from './components/RandomCollection'

export default function MainPage() {
  const dispatch = useDispatch();

  function handleClickCategory(code: string) {
    dispatch(updateCode(code));
  }

  return (
    <>
      <BannerSlider slides={mainBannerData} />
      <S.Main>
        <PickSection
          title="MD의 추천"
          categoryData={mdChoicesCategoriesData}
          productData={mdChoicesProductsData}
          onClick={handleClickCategory}
        />
        <RandomCollectionSection data={randomCollectionData} />
        <RandomCollectionSection data={randomCollectionData2} />
      </S.Main>
    </>
  );
}
