"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Engine,
  // type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesPage = () => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#010610",
        },
      },
      "fullScreen": {
        "enable": true
      },
      particles: {
        number: {
          value: 150,
          density: {
            enable: false,
          },
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "star",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 1,
          random: true,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "top",
          random: true,
          straight: false,
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          hover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
            factor: 50,
            speed: 1,
          },
        },
      },
      detectRetina: true,
      
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesPage;