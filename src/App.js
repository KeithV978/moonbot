import { Container } from "@mui/material";
import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  document.title = "Welcome to MoonBot";
  return (
    <Container>
      <main>
        <Header />
        <Hero />
      </main>
    </Container>
  );
}

export default App;
