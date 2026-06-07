import { useState } from "react";
import Disclaimer from "./components/Disclaimer";
import WalterAI from "./components/WalterAI";

function App() {
  const [accepted, setAccepted] = useState(false);

  if (!accepted) {
    return <Disclaimer onAccept={() => setAccepted(true)} />;
  }

  return (
    <div>
      <header style={{ padding: "20px", background: "#06080f", color: "white", textAlign: "center" }}>
        <h1>💧 Flo·zēk</h1>
        <p>Water Intelligence Platform</p>
      </header>
      <WalterAI />
    </div>
  );
}

export default App;