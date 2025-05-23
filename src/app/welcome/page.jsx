import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Random Quote Machine</h1>
      <Link to="/quote">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Go to Quotes</button>
      </Link>
    </div>
  );
};

export default WelcomePage;