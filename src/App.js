import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Awards from "./components/Awards";
import Sidebar from "./components/sidebar";
import Mainbar from "./components/Mainbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Info />
      <Awards />
      <div className="main">
        <Sidebar />
        <Mainbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
