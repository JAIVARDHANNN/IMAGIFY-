import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasDrawer = ({ uploadedImage, setMaskImage }) => {
  const [brushColor, setBrushColor] = useState("black");
  const [brushRadius, setBrushRadius] = useState(10);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef.current);
    }
  }, []);

  const handleExportMask = () => {
    const maskDataUrl = canvas.getDataURL();
    setMaskImage(maskDataUrl);
  };

  return (
    <div className="image-container">
      {/* Image to draw on */}
      <img src={uploadedImage} alt="Uploaded" />
      {/* Canvas to draw over the image */}
      <CanvasDraw
        ref={canvasRef}
        brushColor={brushColor}
        brushRadius={brushRadius}
        hideGrid={true}
        canvasWidth={window.innerWidth * 0.8}
        canvasHeight={window.innerHeight * 0.6}
        onChange={() => {}}
      />
      <div>
        <button onClick={handleExportMask}>Save Mask</button>
      </div>
      <div>
        <label>Brush Size</label>
        <input
          type="range"
          min="1"
          max="50"
          value={brushRadius}
          onChange={(e) => setBrushRadius(e.target.value)}
        />
      </div>
      <div>
        <label>Brush Color</label>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CanvasDrawer;
