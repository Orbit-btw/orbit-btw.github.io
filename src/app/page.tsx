"use client";

import {
  Bell,
  Blocks,
  Code,
  Image as ImageIcon,
  Keyboard,
  LayoutGrid,
  Menu,
  Palette,
  PanelBottom,
  PanelTop,
  Rocket,
  Search,
  Sparkles,
  Type,
  UserCircle,
} from "lucide-react";

import { useEffect, useRef } from "react";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const futureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Spotlight effect
    const applySpotlight = (ref: React.RefObject<HTMLDivElement | null>) => {
      const cards = ref.current?.querySelectorAll(".bento-card, .project-card");
      if (!cards || cards.length === 0) return;

      const handleMouseMove = (e: MouseEvent) => {
        for (const card of Array.from(cards)) {
          const htmlCard = card as HTMLElement;
          const rect = htmlCard.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          htmlCard.style.setProperty("--mouse-x", `${x}px`);
          htmlCard.style.setProperty("--mouse-y", `${y}px`);
        }
      };

      const el = ref.current;
      el?.addEventListener("mousemove", handleMouseMove);
      return () => el?.removeEventListener("mousemove", handleMouseMove);
    };

    const cleanup1 = applySpotlight(featuresRef);
    const cleanup2 = applySpotlight(futureRef);

    // Animate TWM snapping windows
    const twmWindows = document.querySelectorAll(".twm-win");
    let currentLayout = 0;
    const twmInterval = setInterval(() => {
      twmWindows.forEach((w) => w.classList.remove("layout-1", "layout-2"));
      currentLayout = (currentLayout + 1) % 2;
      twmWindows.forEach((w) => w.classList.add(`layout-${currentLayout + 1}`));
    }, 2000);

    // Run initial layout assignment
    twmWindows.forEach((w) => w.classList.add("layout-1"));

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      clearInterval(twmInterval);
    };
  }, []);

  return (
    <>
      <div className="grid-background"></div>

      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <img
              src="/orbit-logo.svg"
              alt="Orbit Logo"
              width={28}
              height={28}
            />
            Orbit
          </div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#future">Future</a>
            <a href="https://github.com/Orbit-btw" target="_blank">
              GitHub
            </a>
          </div>
          <a
            href="https://github.com/Orbit-btw"
            target="_blank"
            className="btn btn-outline"
          >
            Follow on GitHub
          </a>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          {/* Aesthetic Orbit Rings */}
          <div className="orbit-system">
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
            <div className="orbit-core"></div>
          </div>

          <div className="badge">
            <span className="badge-dot"></span>
            Orbit Ecosystem 2.0
          </div>
          <h1 className="hero-title">
            The modern standard
            <br />
            <span className="text-gradient">for Windows ricing.</span>
          </h1>
          <p className="hero-subtitle">
            Orbit provides high-performance tooling, beautiful components, and a
            robust ecosystem designed to completely transform your Windows
            desktop experience.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a
              href="https://github.com/Orbit-btw"
              target="_blank"
              className="btn btn-secondary"
            >
              <span>View Organization</span>
            </a>
          </div>

          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="terminal-title">orbit — powershell</div>
            </div>
            <div className="terminal-body">
              <div className="line">
                <span className="prompt">PS&gt;</span> iwr -useb
                https://orbit-btw.github.io/install.ps1 | iex
              </div>
              <div className="line success">
                ✔ Downloading Orbit core components...
              </div>
              <div className="line success">
                ✔ Installing OrbitTWM and OrbitBar...
              </div>
              <div className="line success">
                ✔ Setup complete! Restart your shell to apply.
              </div>
              <div className="line">
                <span className="prompt">PS&gt;</span>{" "}
                <span className="blink">_</span>
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="section-container" id="projects" ref={featuresRef}>
          <div className="section-header">
            <h2>Currently Active</h2>
            <p>
              Our flagship projects leading the charge in the Windows ricing
              community.
            </p>
          </div>
          <div className="bento-grid">
            <div className="bento-card col-span-2">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <LayoutGrid size={24} style={{ color: "#888" }} />
                  <h3 style={{ marginBottom: 0 }}>OrbitTWM</h3>
                </div>
                <p>
                  A blazing fast Tiling Window Manager for Windows. Dynamic
                  layouts, multi-monitor support, and uncompromised speed.
                </p>
              </div>
              <div className="card-visual twm-visual">
                <div className="twm-win win-1"></div>
                <div className="twm-win win-2"></div>
                <div className="twm-win win-3"></div>
              </div>
            </div>

            <div className="bento-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Type size={24} style={{ color: "#888" }} />
                  <h3 style={{ marginBottom: 0 }}>OrbitFont</h3>
                </div>
                <p>
                  A custom, highly legible monospaced font tailored perfectly
                  for coding and UI rendering.
                </p>
              </div>
              <div className="card-visual visual-code">
                <code>
                  <span className="keyword">@font-face</span> {"{"}
                  <br />
                  &nbsp;&nbsp;font-family:{" "}
                  <span className="string">&apos;Orbit&apos;</span>;<br />
                  &nbsp;&nbsp;src:{" "}
                  <span className="string">url(&apos;orbit.woff2&apos;)</span>;<br />
                  {"}"}
                </code>
              </div>
            </div>

            <div
              className="bento-card col-span-3"
              style={{ minHeight: "220px" }}
            >
              <div
                className="card-content"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                <div style={{ maxWidth: "500px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <PanelTop size={24} style={{ color: "#888" }} />
                    <h3 style={{ marginBottom: 0 }}>OrbitBar</h3>
                  </div>
                  <p>
                    A highly customizable status bar replacement. Get real-time
                    system stats, workspace indicators, and fully scriptable
                    modules perfectly integrated with OrbitTWM.
                  </p>
                </div>
                <div className="orbitbar-visual">
                  <div className="ob-module">Workspace 1</div>
                  <div className="ob-module">CPU: 4%</div>
                  <div className="ob-module">RAM: 3.2G</div>
                  <div className="ob-module">14:02 PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Projects */}
        <section className="section-container" id="future" ref={futureRef}>
          <div className="section-header">
            <h2>The Future of Windows Ricing</h2>
            <p>
              Upcoming projects in the Orbit ecosystem to complete your setup.
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Rocket size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitLauncher
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Rofi / Wofi</span>
                <p>
                  The absolute most essential addition. A blazing fast,
                  keyboard-driven application launcher to completely bypass the
                  heavy, bloated Windows Search indexing. Essential for a
                  keyboard-centric workflow.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Bell size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitNotify
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Dunst / Mako</span>
                <p>
                  The default Windows 11 notification center is uncustomizable
                  and intrusive.{" "}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <ImageIcon size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitPaper
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Hyprpaper</span>
                <p>
                  Changing wallpapers via scripts in Windows is notoriously
                  clunky. A zero-overhead, CLI-driven wallpaper daemon allows
                  for instant, dynamic transitions across multiple monitors with
                  zero RAM bloat.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Menu size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitMenu
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Jgmenu</span>
                <p>
                  A right-click context menu replacement for the desktop.
                  Trigger a custom, scriptable popup menu for quick access to
                  power options, layout changes, or custom scripts without
                  leaving your mouse.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Blocks size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitWidgets
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Eww / Conky</span>
                <p>
                  Rainmeter is too heavy. Build a native Rust widget daemon
                  designed to hook directly into{" "}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Keyboard size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitHotkeys
                  </h3>
                </div>
                <span className="project-tag">Inspired by: sxhkd</span>
                <p>
                  A dedicated, lightweight global hotkey daemon. Manage complex
                  key chords and execute custom scripts completely independent
                  of the window manager.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Sparkles size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitFx
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Picom</span>
                <p>
                  A custom shader engine/compositor plugin. Force rounded
                  corners, dual-kawase blur, and custom drop shadows onto legacy
                  Win32 apps that don&apos;t natively support modern WinUI
                  effects.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <UserCircle size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitGreeter
                  </h3>
                </div>
                <span className="project-tag">
                  Inspired by: Greetd / Tuigreet
                </span>
                <p>
                  Take complete control of the Windows logon experience. Replace
                  the default graphical logon screen with a stark, minimal
                  greeter interface tailored for keyboard power users.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Palette size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitColor
                  </h3>
                </div>
                <span className="project-tag">Inspired by: pywal</span>
                <p>
                  A background color-generation daemon. Automatically extracts a
                  color palette from the current{" "}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <PanelBottom size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitDock
                  </h3>
                </div>
                <span className="project-tag">Inspired by: Plank</span>
                <p>
                  For users who prefer a floating macOS-style dock instead of a
                  top bar. A dedicated, highly-animated, native Rust dock that
                  hooks into{" "}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Search size={20} style={{ color: "#888" }} />
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    OrbitSearch
                  </h3>
                </div>
                <span className="project-tag">Inspired by: fzf / plocate</span>
                <p>
                  Windows Search indexing is notoriously slow and CPU-heavy. A
                  lightning-fast indexing daemon that bypasses Windows Search
                  completely and lets you fuzzy-find any file instantly via{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
