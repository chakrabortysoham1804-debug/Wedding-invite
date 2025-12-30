import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ autoPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.error("Autoplay blocked:", err));
    }
  }, [autoPlay]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setPlaying(!playing);
    } catch (err) {
      console.error("Audio toggle failed:", err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src={`${import.meta.env.BASE_URL}bg-music.mp3`}
          type="audio/mpeg"
        />
      </audio>

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </>
  );
}
