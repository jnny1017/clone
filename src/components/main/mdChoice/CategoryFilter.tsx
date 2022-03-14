import { useAppSelector } from 'store/store'
import { Category } from 'pages/main/models'
import * as S from 'styles/mainStyles'

interface Props {
  data: Category[];
  onClick: (code: string) => void,
}

export function CategoryFilter({ data, onClick }: Props) {
  const selectedCode = useAppSelector(state => state.main.code);

  return (
    <S.Category>
      {data.map(({ code, name }) => {
        return (
          <S.CategoryItem
            key={code}
            onClick={() => onClick(code)}
          >
            <S.CategoryLink
              selected={selectedCode === code}
              href="#none"
            >
              {name}
            </S.CategoryLink>
          </S.CategoryItem>
        )
      })}
    </S.Category>
  )
}
