import { StyledLogoImg, StyledLogoLink } from '../../styles/headerStyle'

export default function Logo() {
  return (
    <h1>
      <StyledLogoLink href="https://www.kurly.com/">
        <StyledLogoImg src={process.env.PUBLIC_URL + '/logo.png'} alt="마켓컬리" />
      </StyledLogoLink>
    </h1>
  )
}
