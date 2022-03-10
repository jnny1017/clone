import { useState } from 'react'

import Category from './Category'
import { gnbFixture } from '../../fixtures'
import { StyledGnb, StyledGnbItem } from '../../styles/headerStyle'

export default function Gnb() {
  const [index, setIndex] = useState<number>(-1);

  // TODO useHook
  function handleMouseEnter(index: number) {
    setIndex(index)
  }

  function handleMouseLeave() {
    setIndex(-1)
    // TODO 대메뉴가 아닌 다른 영역으로 움직였을 때 사라지도록 처리하려면 어떻게 하는게 좋을까요?
  }

  return (
    <StyledGnb>
      {gnbFixture.map((item, index) => {
        return (
          <StyledGnbItem
            key={item}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave}
          >
            {item}
          </StyledGnbItem>
        )
      })}
      <Category selected={index === 0} />
    </StyledGnb >)
}
