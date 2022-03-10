
import { useState } from 'react'

import SubCategory from './SubCategory'
import { Categories } from '../../interfaces'
import { categoriesFixture } from '../../fixtures'
import { StyledCategory, StyledIcon, StyledName, StyledCategoryItem } from '../../styles/headerStyle'

interface Props {
  selected: boolean;
}

export default function Category({ selected }: Props) {
  const [isListHover, setIsListHover] = useState<string>('');

  function handleMouseEnter(no: string) {
    setIsListHover(no)
    // TODO 초기화 추가
  }

  function handleMouseLeave() {
    setIsListHover('')
  }

  return (
    <StyledCategory selected={selected}>
      <ul>
        {categoriesFixture.categories.map((category: Categories) => {
          return (
            <li
              key={category.no}
              onMouseEnter={() => handleMouseEnter(category.no)}
              onMouseLeave={() => handleMouseLeave}
            >
              <StyledCategoryItem>
                <StyledIcon
                  style={{
                    backgroundImage:
                      isListHover !== category.no
                        ? `url(${category.pc_icon_url})`
                        : `url(${category.pc_icon_active_url})`
                  }}
                />
                <StyledName>{category.name}</StyledName>
              </StyledCategoryItem>
              <SubCategory
                selected={
                  isListHover === category.no
                    ? category.categories
                    : null
                }
                data={category}
              />
            </li>
          )
        })}
      </ul>
    </StyledCategory>
  )
}
