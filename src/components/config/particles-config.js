const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    modes: {
      repulse: {
        distance: 800,
        duration: 5,
      },
    },
  },
  particles: {
    color: {
      value: "#fffeee",
    },
    links: {
      color: "#ffffff",
      distance: 170,
      enable: true,
      opacity: 0.2,
      width: 2,
    },
    move: {
      enable: true,
      speed: 4,
    },
    number: {
      value: 70,
    },
    opacity: {
      value: 0.1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
};

export default particlesConfig;
