import React, { useState } from 'react';
import { useObjectToEdit } from '../../state/objectToEdit';

const SingleFileUploader = ({objectToEdit}:{objectToEdit:any}) => {
  const [file, setFile] = useState<File | null>(objectToEdit?.File|| null);

  const {setObjectToEdit} = useObjectToEdit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);

      const File = e.target.files[0];      
      setObjectToEdit({...objectToEdit,File})
    }
  };

  return (
    <>
    <div className="input-group">
      <input id="file" name="image" type="file" onChange={handleFileChange} />
    </div>
    {file && (
      <>
        <div>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className='file_image'
          />
        </div>
      </>
    )}
  </>
  );
};

export default SingleFileUploader;