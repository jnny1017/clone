import { useDispatch } from 'react-redux'

import { categoryFilter } from 'mainSlice'
import { MdChoiceCategory, MdChoiceList } from 'components/main/mdChoice';
import * as S from 'styles/mainStyles'

export function MdChoiceSection() {
  const dispatch = useDispatch()

  function handleClick(code: string) {
    dispatch(categoryFilter(code));
  }

  return (
    <>
      <S.Title>MD의 추천</S.Title>
      <MdChoiceCategory
        onClick={handleClick}
      />
      <MdChoiceList />
    </>
  )
}
