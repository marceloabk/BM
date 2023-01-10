import styled from "styled-components";

const StyledBurguer = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  position: fixed;
  top: 1.45rem;
  right: 0.86rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    height: 0.18rem;
    background-color: ${({ open }) => (open ? "#333" : "#ccc")};
    border-radius: 10px;
    transform-origin: 0.19rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media ${({ theme }) => theme.devices.laptop} {
    display: none;
  }
`;

const Burguer = ({ open, setOpen }) => {
  return (
    <StyledBurguer open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurguer>
  );
};

export default Burguer;
