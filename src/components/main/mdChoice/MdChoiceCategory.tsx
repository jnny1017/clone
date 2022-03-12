import { Category } from 'pages/main/models'
import * as S from 'styles/mainStyles'

interface Props {
  category: Category[],
  selectedCode: string,
  onClick: (code: string) => void,
}
export function MdChoiceCategory({ category, selectedCode, onClick }: Props) {
  return (
    <S.Category>
      {category.map((item) => {
        return (
          <S.CategoryItem
            key={item.code}
            onClick={() => onClick(item.code)}
          >
            <S.CategoryLink
              selected={selectedCode === item.code}
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
