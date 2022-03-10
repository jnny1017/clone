import { userMenuFixture } from '../../fixtures'
import { StyledMenu, StyledMenuItem } from '../../styles/headerStyle'

export default function UserMenu() {
  return (
    <StyledMenu>
      {userMenuFixture.map((item) => {
        return (
          <StyledMenuItem
            key={item}
          >
            {item}
          </StyledMenuItem>
        )
      })}
    </StyledMenu>
  )
}
