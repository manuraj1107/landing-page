import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('http://localhost:3001/spline-scene');

    return () => {
      app.dispose();
    };
  }, []);

  return (
    <div className='w-max mx-auto h-[100vh] flex flex-col align-bottom'>
    <canvas ref={canvasRef} className=' h-3/4' ></canvas>
    </div>
  )
  
  
};

export default SplineScene;
