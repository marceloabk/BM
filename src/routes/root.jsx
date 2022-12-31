import styled from "styled-components";
import { LinkStyleless } from "../components/linkStyleless";
import { LinkLogo } from "../components/logo";
import { NavList } from "../components/navList";
import { VBar } from "../components/verticalBar";
import Theme from "../components/theme";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  flex: 1 0 25%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Main = styled.main`
  overflow-y: auto;
  padding-top: calc(100vh * 0.2 / 2);
  padding-left: 64px;
  min-width: 850px;
`;

const WrapperInner = styled.div`
  width: 60%;
  margin-top: 64px;
`;

export default function Index() {
  return (
    <Theme>
      <Wrapper>
        <Nav>
          <NavList>
            <li>
              <LinkStyleless>Home</LinkStyleless>
            </li>
            <li>
              <LinkStyleless>Portfólio</LinkStyleless>
            </li>
            <li>
              <LinkStyleless>Currículo</LinkStyleless>
            </li>
          </NavList>
          <VBar />
        </Nav>

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
