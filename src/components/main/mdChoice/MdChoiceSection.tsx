import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { categoryFilter } from 'mainSlice'

import { MdChoiceCategory, MdChoiceList } from 'components/main/mdChoice';
import { mdChoicesCategoriesData, mdChoicesProductsData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function MdChoiceSection() {
  const { code } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()

  function handleClick(code: string) {
    dispatch(categoryFilter(code));
  }

  return (
    <>
      <S.Title>MD의 추천</S.Title>
      <MdChoiceCategory
        data={mdChoicesCategoriesData}
        selectedCode={code}
        onClick={handleClick}
      />
      <MdChoiceList
        selectedCode={code}
        data={mdChoicesProductsData}
      />
    </>
  )
}
