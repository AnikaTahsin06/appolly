import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Checkout />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
