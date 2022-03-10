import Logo from './Logo';
import Gnb from './Gnb';
import UserMenu from './UserMenu';

import { StyledHeader } from '../../styles/headerStyle'

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <UserMenu />
      <Gnb />
    </StyledHeader>
  )
}
