"use client";

import { useEffect, useRef, useState } from "react";

const MI = (size: number): React.CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

export function IntroSplash() {
  const [show, setShow] = useState(false);
  const [entered, setEntered] = useState(false);
  const leaving = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("jb-entered") === "1"; } catch {}
    if (seen) return;
    document.documentElement.style.overflow = "hidden";
    setShow(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    const t = setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
        try { v.playbackRate = 0.7; } catch {}
        const p = v.play(); if (p && p.catch) p.catch(() => {});
        v.addEventListener("play", () => { try { v.playbackRate = 0.7; } catch {} }, { once: true });
      }
    }, 140);
    return () => { clearTimeout(t); document.documentElement.style.overflow = ""; };
  }, []);

  function enter() {
    if (leaving.current) return;
    leaving.current = true;
    setEntered(false);
    setTimeout(() => {
      try { sessionStorage.setItem("jb-entered", "1"); } catch {}
      document.documentElement.style.overflow = "";
      const v = videoRef.current;
      if (v) { try { v.pause(); } catch {} }
      setShow(false);
    }, 750);
  }

  if (!show) return null;

  return (
    <div onClick={enter} style={{ position: "fixed", left: 0, right: 0, top: 0, height: "100vh", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", overflow: "hidden", cursor: "pointer", background: "linear-gradient(158deg,#0C2140 0%,#16305E 52%,#1D4E9E 100%)", opacity: entered ? 1 : 0, transition: "opacity .8s ease" }}>
      <video ref={videoRef} autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, animation: "jbSlowZoom 30s ease-in-out infinite alternate" }}>
        <source src="/assets/intro-video-fs.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg,rgba(9,20,40,0.58) 0%,rgba(9,20,40,0.4) 42%,rgba(9,20,40,0.8) 100%)" }}></div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 40, maxWidth: 820, width: "100%" }}>
        <div style={{ animation: "jbIntroPop 1.2s cubic-bezier(.2,.7,.2,1) both" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/intro-logo.png" alt="Yapon tili va kasbiy malaka instituti" style={{ width: 220, height: 220, objectFit: "contain", background: "#fff", borderRadius: 28, padding: 14, boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }} />
        </div>
        <div style={{ fontFamily: "'Manrope',sans-serif", fontSize: 30, fontWeight: 800, color: "#fff", marginTop: 30, letterSpacing: "-0.5px", lineHeight: 1.2, textShadow: "0 2px 24px rgba(0,0,0,0.45)", animation: "jbIntroUp 1.3s .35s cubic-bezier(.2,.7,.2,1) both" }}>Добро пожаловать на платформу JobStudy</div>
        <div style={{ fontFamily: "'Manrope',sans-serif", fontSize: 15.5, color: "#DCE6F7", marginTop: 14, lineHeight: 1.55, textShadow: "0 1px 14px rgba(0,0,0,0.4)", animation: "jbIntroUp 1.3s .55s cubic-bezier(.2,.7,.2,1) both" }}>Ваш путь к обучению и карьере в Японии и Германии</div>
        <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 10, fontFamily: "'Manrope',sans-serif", fontSize: 12, letterSpacing: "2.5px", fontWeight: 700, color: "#B4C6E4", textShadow: "0 1px 10px rgba(0,0,0,0.4)", animation: "jbIntroUp 1.3s .8s cubic-bezier(.2,.7,.2,1) both" }}>
          УЗБЕКИСТАН<span style={{ opacity: 0.45 }}>—</span>ЯПОНИЯ<span style={{ opacity: 0.45 }}>—</span>ГЕРМАНИЯ
        </div>
        <span style={{ ...MI(34), marginTop: 34, color: "rgba(255,255,255,0.8)", animation: "jbBob 1.8s ease-in-out infinite" }}>expand_more</span>
      </div>
    </div>
  );
}
