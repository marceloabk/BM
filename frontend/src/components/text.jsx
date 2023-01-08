import styled from "styled-components";
import fonts from "./styles/fonts";

const { XSmallThin, XSmallLight, SmallLight, BaseLight, LargeLight } = fonts;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Heading1Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading1Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading1Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading1Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading1Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading1Regular.margin};
`;

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Heading2Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading2Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading2Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading2Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading2Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading2Regular.margin};
`;

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Heading3Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading3Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading3Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading3Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading3Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading3Regular.margin};
`;

const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.Heading4Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading4Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading4Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading4Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading4Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading4Regular.margin};
`;

const H5 = styled.h5`
  font-family: ${({ theme }) => theme.fonts.Heading5Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading5Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading5Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading5Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading5Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading5Regular.margin};
`;

const H6 = styled.h6`
  font-family: ${({ theme }) => theme.fonts.Heading6Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading6Regular.fontWeight};
  font-size: ${({ theme, ...props }) =>
    props.size || theme.fonts.Heading6Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading6Regular.lineHeight};
  margin: ${({ theme }) => theme.fonts.Heading6Regular.margin};
  padding: ${({ theme }) => theme.fonts.Heading6Regular.padding};
`;

const P11 = styled.p(XSmallThin);
const P12 = styled.p(XSmallLight);
const P21 = styled.p(SmallLight);
const P = styled.p(BaseLight);
const P31 = styled.p(LargeLight);

export { H1, H2, H3, H4, H5, H6, P11, P12, P21, P, P31 };
