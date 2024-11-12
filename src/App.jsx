import "./App.css";
import About from "./components/About";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Member from "./components/Member";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Activity />
      <Member />
      <Contact />
    </>
  );
}

export default App;
