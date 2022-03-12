import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { Category } from 'pages/main/models'
import * as S from 'styles/mainStyles'

interface Props {
  data: Category[],
  onClick: (code: string) => void,
}
export function MdChoiceCategory({ data, onClick }: Props) {
  const { code } = useSelector((state: RootState) => state.main)

  return (
    <S.Category>
      {data.map((item) => {
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
