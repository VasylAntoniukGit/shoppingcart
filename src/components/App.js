import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/cart" element={<Cart />}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
