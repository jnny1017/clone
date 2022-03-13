import { useSelector } from 'react-redux'

import { useAppSelector } from 'store'
import { Category } from 'pages/main/models'
import * as S from 'styles/mainStyles'

interface Props {
  data: Category[];
  onClick: (code: string) => void,
}

export function CategoryFilter({ data, onClick }: Props) {
  const { code } = useAppSelector(state => state.main);

  return (
    <S.Category>
      {data.map((item: any) => {
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
