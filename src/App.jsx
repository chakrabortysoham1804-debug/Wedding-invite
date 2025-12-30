import { useState } from "react";
import EnterScreen from "./Components/EnterScreen";
import EventCards from "./Components/EventCards";
import MusicToggle from "./Components/MusicToggle";
import Petals from "./Components/Petals";

export default function App() {
  const [entered, setEntered] = useState(false);

  const bgStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}couple-photo.jpeg)`
  };

  return (
    <div className="app-container" style={bgStyle}>
      <Petals />

      {!entered ? (
        <EnterScreen onEnter={() => setEntered(true)} />
      ) : (
        <div className="content">
        <h1 className="invite-title">
        Sanchari &amp; Soubhagya
        </h1>
        <p className="invite-subtitle">
        invite you to their wedding</p>

          <EventCards />
          <MusicToggle />
        </div>
      )}
    </div>
  );
}
