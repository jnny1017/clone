import { Categories, SubCategories } from '../../interfaces'
import { StyledSubCategory, StyledSubCategoryItem } from '../../styles/headerStyle'

interface Props {
  selected: SubCategories[] | null,
  data: Pick<Categories, 'categories'>,
}

export default function SubCategory({ selected, data }: Props) {
  return (
    <StyledSubCategory selected={selected}>
      {data.categories.map((item: any) => {
        return (
          <StyledSubCategoryItem
            key={item.no}
          >
            {item.name}
          </StyledSubCategoryItem>
        )
      })}
    </StyledSubCategory>
  )
}
