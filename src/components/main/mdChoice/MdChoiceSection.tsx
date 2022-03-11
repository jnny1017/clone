import { useState } from 'react'

import { MdChoiceCategory, MdChoiceList } from 'components/main/mdChoice';
import { mdChoicesCategories, mdChoicesProducts } from 'pages/main/data';
import { StyledTitle } from 'styles/mainStyles'

export function MdChoiceSection() {
  const [state, setState] = useState('');

  function handleClick(code: string) {
    setState(code)
  }

  return (
    <>
      <StyledTitle>MD의 추천</StyledTitle>
      <MdChoiceCategory
        category={mdChoicesCategories}
        selectedCode={state}
        onClick={handleClick}
      />
      <MdChoiceList
        selectedCode={state}
        slides={mdChoicesProducts}
      />
    </>
  )
}
