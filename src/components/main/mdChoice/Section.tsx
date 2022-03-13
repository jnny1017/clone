import { useDispatch } from 'react-redux'

import { updateCode } from 'store/mainSlice'
import { CategoryFilter, List } from 'components/main/mdChoice';
import { mdChoicesCategoriesData, mdChoicesProductsData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function Section() {
  const dispatch = useDispatch();

  function handleClick(code: string) {
    dispatch(updateCode(code));
  }

  return (
    <>
      <S.Title>MD의 추천</S.Title>
      <CategoryFilter
        data={mdChoicesCategoriesData}
        onClick={handleClick}
      />
      <List data={mdChoicesProductsData} />
    </>
  )
}
