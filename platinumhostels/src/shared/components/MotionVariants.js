export const container = {
    offscreen: { opacity: 1, scale: 1 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
        type: 'tween',
        ease: [0.25, 0.6, 0.3, 0.8],
      }
    }
  };

export const item = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: [0.25, 0.6, 0.3, 0.8],
      }
    }
};

export const fadeIn = (delay) => {
  return {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.2,
        delay: delay,
				ease: [0.25, 0.5, 0.5, 0.75],
      },
    }
  }};