import styled from "styled-components";
import { H5, P12, P } from "./text";

const CallText = styled(P)`
  margin-top: ${({ theme }) => theme.sizes.Size3};
`
const Container = styled.div`
  margin-bottom: calc(${({ theme }) => theme.sizes.Size2} + ${({ theme }) => theme.sizes.Size9});
`


const ArticleCall = (props) => {
  return (
    <Container>
      <H5>{props.title}</H5>
      <P12>
        {props.author} {props.date}
      </P12>
      <CallText>{props.call}</CallText>
    </Container>
  );
};

export { ArticleCall };
