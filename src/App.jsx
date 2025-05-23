import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./app/welcome/page";
import QuotePage from "./app/quote/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </Router>
  );
}

export default App;