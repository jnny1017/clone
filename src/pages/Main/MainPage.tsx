import LazyComponent from 'components/Lazy';
import BannerSlider from 'components/BannerSlider';
import * as S from 'styles/mainStyles';
import RandomCollection from './components/RandomCollection/RandomCollection';
import {
  mainBannerData,
  mdChoicesCategoriesData,
  mdChoicesProductsData,
} from './data';
import PickSection from '../../components/PickSection';
import { useDispatch } from 'react-redux';
import { updateCode } from 'store/main/mainSlice';

export default function MainPage() {
  const dispatch = useDispatch();

  function handleClickCategory(code: string) {
    dispatch(updateCode(code));
  }

  return (
    <>
      <BannerSlider slides={mainBannerData} />
      <S.Main>
        <LazyComponent>
          <PickSection
            title="MD의 추천"
            categoryData={mdChoicesCategoriesData}
            productData={mdChoicesProductsData}
            onClick={handleClickCategory}
          />
          {[...Array(5).keys()].map(i => (
            <LazyComponent key={i}>
              <RandomCollection />
            </LazyComponent>
          ))}
        </LazyComponent>
      </S.Main>
    </>
  );
}
