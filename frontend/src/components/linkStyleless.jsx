import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyleless = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.NeutralsN900};
`;

export { LinkStyleless };
