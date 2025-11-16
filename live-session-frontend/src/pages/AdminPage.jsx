import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function AdminPage() {
  const [session, setSession] = useState(null);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const startSession = async () => {
    const res = await axios.post("http://localhost:5000/api/session/create");
    setSession(res.data);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(session.userurl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
          "fullscreen"
        ],
        settings: ["speed", "quality"],
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
        quality: { default: 720, options: [1080,720, 480,360,144] },
      });
    }
  }, [session]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "600px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#2c3e50" }}>Admin Panel</h1>

        {!session && (
          <button
            onClick={startSession}
            style={{
              padding: "12px 25px",
              fontSize: "18px",
              borderRadius: "8px",
              background: "#3498db",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            START SESSION
          </button>
        )}

        {session && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "#27ae60" }}>Session Created Successfully 🎉</h3>

            <div
              style={{
                marginTop: "10px",
                background: "#ecf0f1",
                padding: "10px",
                borderRadius: "6px",
                fontSize: "14px",
                wordBreak: "break-all",
              }}
            >
              <b>Share Link:</b> <br /> {session.userurl}
            </div>

            <button
              onClick={copyLink}
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                padding: "8px 18px",
                fontSize: "14px",
                borderRadius: "6px",
                background: "#2ecc71",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>

            {/* PLYR VIDEO PLAYER */}
            <video
              ref={videoRef}
              className="plyr__video-embed"
              controls
              style={{
                marginTop: "20px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
              }}
            >
              <source src="/sample-1080.mp4" type="video/mp4" size="1080" />
              <source src="/sample-720.mp4" type="video/mp4" size="720" />
              <source src="/sample-480.mp4" type="video/mp4" size="480" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
