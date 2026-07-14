"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const MI = (size: number | string): CSSProperties => ({ fontFamily: "'Material Symbols Outlined'", fontSize: size });

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
    requestAnimationFrame(() => {
      setShow(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    });
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
    <div onClick={enter} style={{ 
      position: "fixed", 
      left: 0, 
      right: 0, 
      top: 0, 
      height: "100vh", 
      zIndex: 3000, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      boxSizing: "border-box", 
      overflow: "hidden", 
      cursor: "pointer", 
      background: "linear-gradient(158deg,#0C2140 0%,#16305E 52%,#1D4E9E 100%)", 
      opacity: entered ? 1 : 0, 
      transition: "opacity .8s ease" 
    }}>
      <video ref={videoRef} autoPlay muted loop playsInline style={{ 
        position: "absolute", 
        inset: 0, 
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        zIndex: 0, 
        animation: "jbSlowZoom 30s ease-in-out infinite alternate" 
      }}>
        <source src="/assets/intro-video-fs.mp4" type="video/mp4" />
      </video>
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        zIndex: 1, 
        background: "linear-gradient(180deg,rgba(9,20,40,0.58) 0%,rgba(9,20,40,0.4) 42%,rgba(9,20,40,0.8) 100%)" 
      }}></div>

      <div style={{ 
        position: "relative", 
        zIndex: 2, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        textAlign: "center", 
        padding: "clamp(20px, 5vw, 40px)", 
        maxWidth: 820, 
        width: "100%" 
      }}>
        <div style={{ animation: "jbIntroPop 1.2s cubic-bezier(.2,.7,.2,1) both" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/intro-logo.png" alt="Yapon tili va kasbiy malaka instituti" style={{ 
            width: "clamp(120px, 25vw, 220px)", 
            height: "clamp(120px, 25vw, 220px)", 
            objectFit: "contain", 
            background: "#fff", 
            borderRadius: "clamp(16px, 3vw, 28px)", 
            padding: "clamp(10px, 1.5vw, 14px)", 
            boxShadow: "0 24px 60px rgba(0,0,0,0.45)" 
          }} />
        </div>
        <div style={{ 
          fontFamily: "'Manrope',sans-serif", 
          fontSize: "clamp(22px, 5vw, 30px)", 
          fontWeight: 800, 
          color: "#fff", 
          marginTop: "clamp(20px, 4vw, 30px)", 
          letterSpacing: "-0.5px", 
          lineHeight: 1.2, 
          textShadow: "0 2px 24px rgba(0,0,0,0.45)", 
          animation: "jbIntroUp 1.3s .35s cubic-bezier(.2,.7,.2,1) both" 
        }}>
          Добро пожаловать на платформу JobStudy
        </div>
        <div style={{ 
          fontFamily: "'Manrope',sans-serif", 
          fontSize: "clamp(13px, 2.5vw, 15.5px)", 
          color: "#DCE6F7", 
          marginTop: "clamp(10px, 2vw, 14px)", 
          lineHeight: 1.55, 
          textShadow: "0 1px 14px rgba(0,0,0,0.4)", 
          animation: "jbIntroUp 1.3s .55s cubic-bezier(.2,.7,.2,1) both",
          maxWidth: "90%",
        }}>
          Ваш путь к обучению и карьере в Японии и Германии
        </div>
        <div style={{ 
          marginTop: "clamp(24px, 5vw, 38px)", 
          display: "flex", 
          alignItems: "center", 
          gap: "clamp(6px, 1.5vw, 10px)", 
          fontFamily: "'Manrope',sans-serif", 
          fontSize: "clamp(9px, 1.8vw, 12px)", 
          letterSpacing: "2.5px", 
          fontWeight: 700, 
          color: "#B4C6E4", 
          textShadow: "0 1px 10px rgba(0,0,0,0.4)", 
          animation: "jbIntroUp 1.3s .8s cubic-bezier(.2,.7,.2,1) both",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <span>УЗБЕКИСТАН</span>
          <span style={{ opacity: 0.45 }}>—</span>
          <span>ЯПОНИЯ</span>
          <span style={{ opacity: 0.45 }}>—</span>
          <span>ГЕРМАНИЯ</span>
        </div>
        <span style={{ 
          ...MI("clamp(28px, 5vw, 34px)"), 
          marginTop: "clamp(20px, 4vw, 34px)", 
          color: "rgba(255,255,255,0.8)", 
          animation: "jbBob 1.8s ease-in-out infinite" 
        }}>
          expand_more
        </span>
      </div>

      <style>{`
        @keyframes jbIntroPop {
          0% { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes jbIntroUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes jbBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes jbSlowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}