import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import Customer from "./components/Customer/Customer";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Checkout />
      <Team />
      <Customer />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
