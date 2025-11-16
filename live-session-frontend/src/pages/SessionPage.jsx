import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function SessionPage() {
  const { id } = useParams();
  const [session, setSession] = useState(null);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/session/${id}`)
      .then((res) => setSession(res.data))
      .catch(() => alert("Invalid session"));
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["speed", "quality"],
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
        quality: { default: 720, options: [1080,720, 480] },
      });
    }
  }, [session]);

  if (!session)
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontFamily: "Arial",
        }}
      >
        Loading...
      </h2>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 40px",
          borderRadius: "12px",
          width: "650px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "15px", color: "#2c3e50" }}>
          Student Live Session
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "20px",
            background: "#ecf0f1",
            padding: "8px",
            borderRadius: "6px",
          }}
        >
          <b>Session ID:</b> {session.unique_id}
        </p>

        {/* PLYR VIDEO PLAYER */}
        <video
          ref={videoRef}
          className="plyr__video-embed"
          controls
          style={{
            borderRadius: "10px",
            boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
            width: "100%",
            height: "400px",
          }}
        >
          <source src="/sample-1080.mp4" type="video/mp4" size="1080" />
          <source src="/sample-720.mp4" type="video/mp4" size="720" />
          <source src="/sample-480.mp4" type="video/mp4" size="480" />
        </video>
      </div>
    </div>
  );
}

export default SessionPage;
