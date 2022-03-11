import { Category } from 'pages/main/models'
import { StyledCategory, StyledCategoryItem, StyledCategoryLink } from 'styles/mainStyles'

interface Props {
  category: Category[],
  selectedCode: string,
  onClick: (code: string) => void,
}
export function MdChoiceCategory({ category, selectedCode, onClick }: Props) {
  return (
    <StyledCategory>
      {category.map((item) => {
        return (
          <StyledCategoryItem
            key={item.code}
            onClick={() => onClick(item.code)}
          >
            <StyledCategoryLink
              selected={selectedCode === item.code}
              href="#none"
            >
              {item.name}
            </StyledCategoryLink>
          </StyledCategoryItem>
        )
      })}
    </StyledCategory>
  )
}
