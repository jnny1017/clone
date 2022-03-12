import { useDispatch } from 'react-redux'

import { selectedCode } from 'mainSlice'
import { CategoryFilter, List } from 'components/main/mdChoice';
import { mdChoicesCategoriesData, mdChoicesProductsData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function MdChoiceSection() {
  const dispatch = useDispatch();

  function handleClick(code: string) {
    dispatch(selectedCode(code));
  }

  return (
    <>
      <S.Title>MD의 추천</S.Title>
      <CategoryFilter
        data={mdChoicesCategoriesData}
        onClick={handleClick}
      />
      <List data={mdChoicesProductsData}/>
    </>
  )
}
