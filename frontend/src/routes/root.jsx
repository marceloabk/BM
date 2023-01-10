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
  flex-basis: 100%;
  padding-top: ${({ theme }) => theme.sizes.Size7};
  padding-left: ${({ theme }) => theme.sizes.Size7};
  
  @media ${({ theme }) => theme.devices.laptop} {
    flex-basis: 80%;
    padding-left: ${({ theme }) => theme.sizes.Size12};
    padding-top: calc(100vh * 0.2 / 2);
  }
`;

const WrapperInner = styled.div`
  margin-top: ${({ theme }) => theme.sizes.Size8};
  width: 90%;
  max-width: 800px;

  @media ${({ theme }) => theme.devices.laptop} {
    margin-top: ${({ theme }) => theme.sizes.Size12};
  }
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
