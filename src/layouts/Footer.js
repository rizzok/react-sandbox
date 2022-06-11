import styled from "styled-components";

const FooterContainer = styled.footer`
  //height: 200px;
  min-height: 200px;
  padding: 2rem;
  margin-top: auto;
  background-color: var(--ash-gray);
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <h3>Footer</h3>
    </FooterContainer>
  );
};
