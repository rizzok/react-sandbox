import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Main } from "./layouts/Main";
import { Contact } from "./pages/Contact";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--magnolia);
  height: 100vh;
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
}
