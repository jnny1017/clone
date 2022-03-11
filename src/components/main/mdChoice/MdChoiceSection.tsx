import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { filter } from 'mainSlice'

import { MdChoiceCategory, MdChoiceList } from 'components/main/mdChoice';
import { mdChoicesCategories, mdChoicesProducts } from 'pages/main/data';
import { StyledTitle } from 'styles/mainStyles'

export function MdChoiceSection() {
  const count = useSelector((state: RootState) => state.main.code)
  const dispatch = useDispatch()

  function handleClick(code: string) {
    dispatch(filter(code));
  }

  return (
    <>
      <StyledTitle>MD의 추천</StyledTitle>
      <MdChoiceCategory
        category={mdChoicesCategories}
        selectedCode={count}
        onClick={handleClick}
      />
      <MdChoiceList
        selectedCode={count}
        slides={mdChoicesProducts}
      />
    </>
  )
}
