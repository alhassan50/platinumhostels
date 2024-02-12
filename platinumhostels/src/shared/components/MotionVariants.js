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
      ease: [0.4, 0.0, 0.6, 1],
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
      ease: [0.4, 0.0, 0.6, 1],
    },
  },
}};