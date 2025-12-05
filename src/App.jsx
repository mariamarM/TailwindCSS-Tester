import Room from "./assets/roomBackgrond.png";
import "./App.css";
import { Tamagotchi } from "./components/Tamagotchi.jsx";

function App() {
  return (
    <div
      className="room"
      style={{
        backgroundImage: `url(${Room})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Tamagotchi />
      </div>
    </div>
  );
}

export default App;
