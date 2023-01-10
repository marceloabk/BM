import styled from "styled-components";
import { P11, P, H1 } from "./text";

const Title = styled(H1)`
  font-size: ${({ theme}) => theme.fonts.Heading6Regular.fontSize};

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme}) => theme.fonts.Heading5Regular.fontSize};
  }
`

const CallText = styled(P)`
  margin-top: ${({ theme }) => theme.sizes.Size3};
  font-size: ${({ theme}) => theme.fonts.SmallLight.fontSize};

  @media ${({ theme }) => theme.devices.laptop} {
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
      <P11>
        {props.author} {props.date}
      </P11>
      <CallText>{props.call}</CallText>
    </Container>
  );
};

export { ArticleCall };
