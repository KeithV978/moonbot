import Container from "@mui/material/Container";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import "./App.css";
import "./assets/fonts/index.css";
import { Footer } from "./components/footer";
import { ConnectWallet } from "./components/connect";

function App() {
  document.title = "Welcome to MoonBot";
  return (
    <Container>
      <main style={{ position: "relative" }}>
        <Header />
        <Hero />
        <Features />
        <ConnectWallet />
        <Footer />
      </main>
    </Container>
  );
}

export default App;
