import React from 'react';

const ImageUploader = ({ setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUploader;
