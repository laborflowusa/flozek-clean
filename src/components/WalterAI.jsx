import { useState } from "react";

export default function WalterAI() {
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!zipCode || zipCode.length !== 5) {
      setResult({ error: "Please enter a valid 5-digit ZIP code" });
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const zipData = {
        "90210": { city: "Beverly Hills", score: 85, message: "Good water quality" },
        "10001": { city: "New York City", score: 72, message: "Moderate water quality" },
        "60601": { city: "Chicago", score: 68, message: "Average water quality" }
      };
      
      const data = zipData[zipCode] || { 
        city: "Unknown Location", 
        score: Math.floor(Math.random() * 100), 
        message: "Water quality data limited" 
      };
      
      setResult({
        city: data.city,
        score: data.score,
        message: data.message,
        recommendation: data.score > 80 ? "Your water is good!" : "Consider a carbon filter."
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>🔍 Search Your Water</h2>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter ZIP code (e.g., 90210)"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          maxLength={5}
          style={{ padding: "10px", flex: 1, fontSize: "16px" }}
        />
        <button onClick={handleSearch} disabled={loading} style={{ padding: "10px 20px", fontSize: "16px" }}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      
      {result && !result.error && (
        <div style={{ marginTop: "20px", padding: "20px", background: "#e0f0ff", borderRadius: "10px" }}>
          <h3>{result.city}</h3>
          <p>{result.message}</p>
          <p>Water Quality Score: <strong>{result.score}/100</strong></p>
          <p>💡 Recommendation: {result.recommendation}</p>
        </div>
      )}
      
      {result && result.error && (
        <div style={{ marginTop: "20px", padding: "20px", background: "#ffe0e0", borderRadius: "10px", color: "red" }}>
          ⚠️ {result.error}
        </div>
      )}
    </div>
  );
}