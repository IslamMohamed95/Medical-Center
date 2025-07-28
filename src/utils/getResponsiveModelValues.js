export function getResponsiveModelValues() {
  const width = window.innerWidth;

  if (width >= 320 && width <= 374) {
    return {
      logo: {
        scale: 3,
        position: [-2, -1, 0], // adjust as needed
        htmlPosition: [1.3, 0.5, 0],
      },
      heart: {
        scale: 2.5,
        position: [0, 0, 0],
        shadowPosition: [0, -2.8, 0],
      },
    };
  } else if (width >= 375 && width <= 425) {
    return {
      logo: {
        scale: 2,
        position: [-2.5, -0.5, 0], // adjust as needed
        htmlPosition: [0, 0.5, 0],
      },
      heart: {
        scale: 2.9,
        position: [0, 0, 0],
        shadowPosition: [0, -2.8, 0],
      },
    };
  } else if (width >= 425 && width <= 767) {
    return {
      logo: {
        scale: 2,
        position: [-2.5, -0.5, 0], // adjust as needed
        htmlPosition: [0, 0.5, 0],
      },
      heart: {
        scale: 2.5,
        position: [0, 0, 0],
        shadowPosition: [0, -2.8, 0],
      },
    };
  } else if (width >= 768 && width < 1024) {
    return {
      logo: {
        scale: 1.8,
        position: [-1, 0, 0], // adjust as needed
        htmlPosition: [1.2, 1, 0],
      },
      heart: {
        scale: 2.2,
        position: [0, 0.1, 0],
        shadowPosition: [0, -3, 0],
      },
    };
  } else if (width >= 1024 && width < 1440) {
    return {
      logo: {
        scale: 1.8,
        position: [-1, 0, 0], // adjust as needed
        htmlPosition: [1.2, 1, 0],
      },
      heart: {
        scale: 2.5,
        position: [0, 0.1, 0],
        shadowPosition: [0, -3, 0],
      },
    };
  } else if (width >= 1440) {
    return {
      logo: {
        scale: 2,
        position: [0, 0, 0], // adjust as needed
        htmlPosition: [2.3, 1, 0],
      },
      heart: {
        scale: 2.3,
        position: [0, 0, 0],
        shadowPosition: [0, -2.85, 0],
      },
    };
  }
}
