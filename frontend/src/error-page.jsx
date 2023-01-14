import styled from "styled-components";

import { useRouteError } from "react-router-dom";
import { H1, H4 } from "./components/Text";
import Theme from "./components/Theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({article}) => {
    if (!article) {
      return (
        `height: 100vh;
         width: 100vw;`
      )
    }
  }};
`;

const H4Styled = styled(H4)`
  text-align: center;
  max-width: 800px;
  margin: 0;
`;

export default function ErrorPage({article}) {
  const error = useRouteError();
  console.error(error);

  return (
    <Theme>
      <Wrapper article={article}>
        <H1>404</H1>
        <H4Styled>
          Essa página estava na nuvem, mas parece que está chovendo!
        </H4Styled>
      </Wrapper>
    </Theme>
  );
}
