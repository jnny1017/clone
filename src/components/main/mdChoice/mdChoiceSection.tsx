import { useDispatch } from 'react-redux'

import { updateCode } from 'store/mainSlice'
import { CategoryFilter } from 'components/main/mdChoice';
import { mdChoicesCategoriesData, mdChoicesProductsData } from 'pages/main/data';
import MainSection from 'components/main/section/MainSection';
import { Slider } from 'components/slider';

export function MdChoiceSection() {
  const dispatch = useDispatch();

  function handleClickCategory(code: string) {
    dispatch(updateCode(code));
  }

  return (
    <>
      <MainSection
        title="MD의 추천"
      >
        <CategoryFilter
          data={mdChoicesCategoriesData}
          onClick={handleClickCategory}
        />
        <Slider data={mdChoicesProductsData} />
      </MainSection>
    </>
  )
}
