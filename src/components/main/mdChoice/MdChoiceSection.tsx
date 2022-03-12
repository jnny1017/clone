import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { filter } from 'mainSlice'

import { MdChoiceCategory, MdChoiceList } from 'components/main/mdChoice';
import { mdChoicesCategoriesData, mdChoicesProductsData } from 'pages/main/data';
import * as S from 'styles/mainStyles'

export function MdChoiceSection() {
  const count = useSelector((state: RootState) => state.main.code)
  const dispatch = useDispatch()

  function handleClick(code: string) {
    dispatch(filter(code));
  }

  return (
    <>
      <S.Title>MD의 추천</S.Title>
      <MdChoiceCategory
        category={mdChoicesCategoriesData}
        selectedCode={count}
        onClick={handleClick}
      />
      <MdChoiceList
        selectedCode={code}
        data={mdChoicesProductsData}
      />
    </>
  )
}
