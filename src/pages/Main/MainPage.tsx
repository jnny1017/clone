import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateCode, updateCart } from '../../store/main/mainSlice';
import { fetchMainBannerData, fetchMdChoiceCategoryData, fetchMdChoiceProductData, fetchRandomCollectionData } from '../../store/main/main.thunks';
import { useAppSelector } from '../../store/store';
import * as S from '../../styles/mainStyles';

import RandomCollectionSection from './components/RandomCollection';
import CartModal from './components/CartModal';
import BannerSlider from '../../components/BannerSlider';
import PickSection from '../../components/PickSection';
import useModal from '../../components/useModal';
import { SliderItemModel } from '../../components/Slider/models/sliderItem.model';

export default function MainPage() {
  const dispatch = useDispatch();
  const { isOpen, handleClickModal } = useModal();

  const {
    mainBannerData,
    mdChoiceCategoryData,
    mdChoiceProductData,
    randomCollectionData,
    randomCollectionData2
  } = useAppSelector(
    state => state.main
  );


  useEffect(() => {
    dispatch(fetchMainBannerData());
    dispatch(fetchRandomCollectionData());
    dispatch(fetchMdChoiceCategoryData());
    dispatch(fetchMdChoiceProductData());

  }, [dispatch]);

  function handleClickSlide(slide: SliderItemModel) {
    dispatch(updateCart(slide));
    handleClickModal();
  }

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
        <RandomCollectionSection data={randomCollectionData} onClickModal={handleClickSlide} />
        <RandomCollectionSection data={randomCollectionData2} onClickModal={handleClickSlide} />
        {isOpen ?
          <CartModal onClickModal={handleClickModal} />
          : null}
      </S.Main>
    </>
  );
}
