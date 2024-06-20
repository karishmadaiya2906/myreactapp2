// src/variants.js
export const fadeIn = (direction = 'up', delay = 0) => {
    let x = 0, y = 0;
    
    if (direction === 'up') y = 50;
    else if (direction === 'down') y = -50;
    else if (direction === 'left') x = 40;
    else if (direction === 'right') x = -40;
    
    return {
      hidden: {
        opacity: 0,
        x: x,
        y: y,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
export const zoomIn = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.6 }
  }
};
  