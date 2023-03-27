import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Store from "./Pages/Store";
import "./styles.css";
import NavBar from "./Components/NavBar.jsx";
import { ShoppingCartProvider } from "./Context/ShoppingContext";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/react-shopping-cart" element={<HomePage />} />
          <Route path="/react-shopping-cart/store" element={<Store />} />
          <Route path="/react-shopping-cart/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
