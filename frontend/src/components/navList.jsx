import styled from "styled-components";

const NavList = styled.ul`
  font-family: ${({ theme }) => theme.fonts.Heading4Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading4Regular.fontWeight};
  font-size: ${({ theme }) => theme.fonts.Heading4Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading4Regular.lineHeight};
  list-style-type: none;
  text-align: right;
`;

export { NavList };
