import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
