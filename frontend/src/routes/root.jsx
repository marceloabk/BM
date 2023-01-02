import styled from "styled-components";
import { LinkLogo } from "../components/logo";
import Theme from "../components/theme";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
  }
`;

const Main = styled.main`
  overflow-y: auto;
  padding-top: calc(100vh * 0.2 / 2);
  padding-left: 64px;
`;

const WrapperInner = styled.div`
  width: 60%;
  margin-top: 64px;
`;

export default function Root() {
  return (
    <Theme>
      <Wrapper>
        <Navbar />
        <Main>
          <LinkLogo />
          <WrapperInner>
            <Outlet />
          </WrapperInner>
        </Main>
      </Wrapper>
    </Theme>
  );
}
