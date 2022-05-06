import { useRef, useEffect } from 'preact/hooks';
import { canvasInit } from './../utils/UtilCanvas';

export default function Canvas({currentTheme}) {
  const canvas = useRef(null);

  useEffect(() => canvasInit(canvas.current, { avoidMouse: false }), [currentTheme]);

  return  <canvas ref={canvas} className="w-full h-full bg-gradient-to-b from-skin-secondary-sub to-skin-secondary" />
}