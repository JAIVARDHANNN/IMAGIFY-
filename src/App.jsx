import React, { useState } from "react";
import CanvasDrawer from "./CanvasDrawer";
import "./App.css";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>Image Inpainting Widget</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {uploadedImage && (
        <CanvasDrawer
          uploadedImage={uploadedImage}
          setMaskImage={setMaskImage}
        />
      )}
      {maskImage && (
        <div>
          <h2>Mask Image</h2>
          <img src={maskImage} alt="Mask" />
        </div>
      )}
    </div>
  );
};

export default App;
  