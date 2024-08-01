import React, { useState } from 'react';

function ImageUploader() {
  const [preview, setPreview] = useState('');
  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: '200px' , borderRadius:'50%' }} />}
     
    </div>
  );
}

export default ImageUploader;
