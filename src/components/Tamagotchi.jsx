import { useState, useEffect, useRef } from "react";
import mii from "../assets/mii.png";

export function Tamagotchi() {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [health, setHealth] = useState(100);

  const [isSleeping, setIsSleeping] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setHappiness(h => Math.max(0, h - 1));
      setHealth(hl => Math.max(0, hl - 1));
      setHunger(hg => Math.max(0, hg - 1));
    }, 3000);

    return () => clearInterval(timer.current);
  }, []);

  const feed = () => setHunger(h => Math.min(h + 15, 100));

  const play = () => {
    setHappiness(h => Math.min(h + 20, 100));
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1500);
  };

  const sleep = () => {
    setHealth(h => Math.min(h + 20, 100));
    setIsSleeping(true);
    setTimeout(() => setIsSleeping(false), 2500);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <StatusBar label="Hunger" value={hunger} color="#ef4444" />
        <StatusBar label="Happiness" value={happiness} color="#f59e0b" />
        <StatusBar label="Health" value={health} color="#10b981" />
      </div>

      <div style={{ position: "relative" }}>
        <img 
          src={mii} 
          alt="mii" 
          style={{ width: 700, height: 700 }}   
        />

        {showHearts && (
          <div
            style={{
              position: "absolute",
              top: -30,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 50,
              animation: "floatUp 1.3s ease-out forwards",
            }}
          >
            ❤️❤️
          </div>
        )}

        {isSleeping && (
          <div
            style={{
              position: "absolute",
              left:0,
              top:0,
              inset: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.6)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 26,
            }}
          >
          Descansando..
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button style={btn} onClick={feed}>Feed</button>
        <button style={btn} onClick={play}>Play</button>
        <button style={btn} onClick={sleep}>Sleep</button>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, -80px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function StatusBar({ label, value, color }) {
  return (
    <div style={{ width: 120, display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 14, fontWeight: 500 }}>{label}: {value}%</span>
      <div
        style={{
          height: 10,
          width: "100%",
          background: "#e5e7eb",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

const btn = {
  padding: "10px 16px",
  borderRadius: 10,
  background: "#111827",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: 14,
};
