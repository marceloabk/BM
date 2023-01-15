import styled from "styled-components";
import { LinkStyleless } from "./LinkStyleless";

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.Heading1Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading1Regular.fontWeight};
  font-size: 11vw;
  line-height: 70%;
  display: inline;

  @media ${({ theme }) => theme.devices.mobileM} {
    font-size: 11vw;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: 9vw;
  }

  @media ${({ theme }) => theme.devices.laptopL} {
    font-size: ${({ theme }) => theme.fonts.Heading1Regular.fontSize};
  }
`;

const LogoDarker = styled(Logo)`
  color: ${({ theme }) => theme.colors.NeutralsN900};
`;

const LogoLighter = styled(Logo)`
  color: ${({ theme }) => theme.colors.NeutralsN80};
`;

const LinkLogo = () => (
  <LinkStyleless to="/">
    <LogoDarker>BLOG</LogoDarker>
    <LogoLighter>MAKER</LogoLighter>
  </LinkStyleless>
);

export { LinkLogo };
