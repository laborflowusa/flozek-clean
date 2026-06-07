import { useState } from "react";

export default function Disclaimer({ onAccept }) {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ fontSize: "48px" }}>💧</div>
      <h1>Flo·zēk</h1>
      <p>Water Intelligence Platform</p>
      
      <div style={{ background: "#f5f5f5", padding: "15px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>⚖️ Important Disclaimer</h3>
        <p>Flo·zēk is an independent research platform. We are not medical professionals.</p>
        <p>All information is for educational purposes only.</p>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <label>
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={(e) => setChecked(e.target.checked)} 
          />
          I understand and agree to the terms
        </label>
      </div>
      
      <button 
        onClick={() => checked && onAccept && onAccept()}
        disabled={!checked}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: checked ? "#0a84ff" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: checked ? "pointer" : "not-allowed"
        }}
      >
        Enter Flo·zēk
      </button>
    </div>
  );
}
