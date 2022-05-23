import { useRef, useEffect } from 'preact/hooks';
import { canvasInit } from './../utils/UtilCanvas';

export default function Canvas({currentTheme}) {
  const canvas = useRef(null);

  useEffect(() => {
    if(typeof currentTheme === 'boolean'){
      canvasInit(canvas.current, currentTheme, { avoidMouse: false, numParticles: 8 });
    }
  }, [currentTheme]);

  return  <canvas ref={canvas} className="w-full h-full bg-gradient-to-b from-skin-secondary-sub to-skin-secondary" />
}