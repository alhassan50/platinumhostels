export const fadeIn = (direction, duration, delay, opacity) => {
  return {
    offscreen: {
      y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
      opacity: 0,
      x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0, 
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: opacity ? opacity : 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
}};
  
export const flipX = () => {
  return {
    offscreen: { opacity: 0, scaleX: 0 },
    onscreen: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: 'tween',
        duration: 0.2,
        delay: 0.1,
          ease: [0.25, 0.5, 0.5, 0.75],
      },
  }
}};

export const zoomIn = ( duration, delay) => {
  return {
      hidden: {
        opacity: 0.3,
        scale: 0.5,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        opacity: 1,
        scale: 1, 
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
};

export const Scale = (duration ,delay) => {
return {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.8,
    transition: {
      type: 'tween',
      duration: duration,
      delay: delay,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: duration,
      delay: delay,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}};

/* export const container = (delay, stagger) => {
  return {
      offscreen: { opacity: 1, scale: 1 },
      onscreen: {
      opacity: 1,
      scale: 1,
          transition: {
              delayChildren: delay,
              staggerChildren: stagger
          }
      }
  }
};

export const items = (direction,duration) => {
  return {
      offscreen: { 
          y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
          opacity: 0,
          x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0, 
          transition: {
          type: 'tween',
          duration: duration,
          ease: [0.25, 0.6, 0.3, 0.8],
          },
       },
      onscreen: {
      y: 0,
      x:0,
      opacity: 1,
      transition: {
          type: 'tween',
          duration: .5,
          ease: [0.25, 0.6, 0.3, 0.8],
      },
      }
  };
} */