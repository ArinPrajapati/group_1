import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection ";
import LIne from "./components/LIne";
import { Blog } from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="home">
        <LIne />
        <Blog />
      </div>
    </>
  );
}

export default App;
