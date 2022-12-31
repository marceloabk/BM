import styled from "styled-components";
import { LinkStyleless } from "./linkStyleless";

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.Heading1Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading1Regular.fontWeight};
  font-size: ${({ theme }) => theme.fonts.Heading1Regular.fontSize};
  line-height: 70%;
  margin: 0;
  display: inline;
`;

const LogoDarker = styled(Logo)`
  color: ${({ theme }) => theme.colors.NeutralsN900};
`;

const LogoLighter = styled(Logo)`
  color: ${({ theme }) => theme.colors.NeutralsN80};
`;

const LinkLogo = () => (
  <LinkStyleless>
    <LogoDarker>MARCELO</LogoDarker>
    <LogoLighter>CRISTIANO</LogoLighter>
  </LinkStyleless>
);

export { LinkLogo };
