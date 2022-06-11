import styled from "styled-components";

const MainContainer = styled.main`
  padding: 2rem;
`;

export const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
