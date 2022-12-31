import styled from "styled-components";
import fonts from "./styles/fonts";

const { XSmallThin, XSmallLight, SmallLight, BaseLight, LargeLight } = fonts;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Heading1Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading1Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading1Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading1Regular.lineHeight};
`;

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Heading2Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading2Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading2Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading2Regular.lineHeight};
`;
const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Heading3Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading3Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading3Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading3Regular.lineHeight};
`;
const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.Heading4Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading4Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading4Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading4Regular.lineHeight};
`;
const H5 = styled.h5`
  font-family: ${({ theme }) => theme.fonts.Heading5Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading5Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading5Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading5Regular.lineHeight};
`;
const H6 = styled.h6`
  font-family: ${({ theme }) => theme.fonts.Heading6Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading6Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading6Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading6Regular.lineHeight};
`;

const pXSThin = styled.p(XSmallThin);
const pXSLight = styled.p(XSmallLight);
const pSmall = styled.p(SmallLight);
const p = styled.p(BaseLight);
const pLarge = styled.p(LargeLight);

export { H1, H2, H3, H4, H5, H6, pXSThin, pXSLight, pSmall, p, pLarge };
