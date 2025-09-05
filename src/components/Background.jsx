import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0d0d0d" }, // black bg
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#00ffff" },
          links: {
            enable: true,
            distance: 150,
            color: "#ff00ff",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
}
