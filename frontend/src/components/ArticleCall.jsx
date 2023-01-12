import styled from "styled-components";
import { P, H1, Paragraph } from "./Text";

const Title = styled(H1)`
  font-size: ${({ theme}) => theme.fonts.Heading6Regular.fontSize};

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme}) => theme.fonts.Heading5Regular.fontSize};
  }
`

const Meta = styled(Paragraph)`
  font-size: ${({ theme}) => theme.fonts.XSmallThin.fontSize};

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme}) => theme.fonts.SmallLight.fontSize};
  }
`

const CallText = styled(P)`
  margin-top: ${({ theme }) => theme.sizes.Size3};
  font-size: ${({ theme}) => theme.fonts.SmallLight.fontSize};

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme}) => theme.fonts.BaseLight.fontSize};
  }
`

const Container = styled.div`
  margin-bottom: calc(${({ theme }) => theme.sizes.Size2} + ${({ theme }) => theme.sizes.Size9});
`

const ArticleCall = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Meta>
        {props.author} {props.date}
      </Meta>
      <CallText>{props.call}</CallText>
    </Container>
  );
};

export { ArticleCall };
