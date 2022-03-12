import { useSelector } from 'react-redux'

import { RootState } from 'store'
import * as S from 'styles/mainStyles'
import { mdChoicesCategoriesData } from 'pages/main/data';

interface Props {
  onClick: (code: string) => void,
}
export function MdChoiceCategory({ onClick }: Props) {
  const { code } = useSelector((state: RootState) => state.main)

  return (
    <S.Category>
      {mdChoicesCategoriesData.map((item) => {
        return (
          <S.CategoryItem
            key={item.code}
            onClick={() => onClick(item.code)}
          >
            <S.CategoryLink
              selected={code === item.code}
              href="#none"
            >
              {item.name}
            </S.CategoryLink>
          </S.CategoryItem>
        )
      })}
    </S.Category>
  )
}
