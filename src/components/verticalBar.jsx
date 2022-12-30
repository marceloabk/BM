import styled from "styled-components";

const VBar = styled.span`
  border-right-style: solid;
  border-right-width: ${({ theme }) => theme.sizes.Size1};
  border-right-color: ${({ theme }) => theme.colors.NeutralsN900};
  height: 80%;
  margin-left: ${({ theme }) => theme.sizes.Size8};
`;

export { VBar };
