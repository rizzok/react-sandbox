import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--han-purple);
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>React Sandbox</Title>
      <HeaderNav />
    </HeaderContainer>
  );
};
