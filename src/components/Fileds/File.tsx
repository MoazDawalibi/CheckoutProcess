import React, { useState } from 'react';
import { useObjectToEdit } from '../../state/objectToEdit';

const SingleFileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const {setObjectToEdit} = useObjectToEdit();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setObjectToEdit(e.target.files[0])
    }
  };

  const handleUpload = async () => {
    // We will fill this out later
  };

  return (
    <>
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button 
          onClick={handleUpload}
          className="submit"
        >Upload a file</button>
      )}
    </>
  );
};

export default SingleFileUploader;