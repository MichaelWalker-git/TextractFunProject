import React,{useState} from 'react';
import { Storage } from 'aws-amplify';
import {Alert} from "react-bootstrap";

const UploadImageToS3WithNativeSDK = () => {
  const [isSuccessful , triggerAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = async (file) => {
    try {
      await Storage.put(file.name, file);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const handleUpload = () => {
    return uploadFile(selectedFile).then((res, err) => {
      console.log("Successful")
      triggerAlert(true);
    })
  }

  return <div className={"inputDropZoneBody"}>
    <h1 className={"inputTitle"}>Native SDK File</h1>
    <div className={"inputContainer"}>
      <input type="file" onChange={handleFileInput}/>

    </div>
    <div className={"buttonContainer"}>
      <button onClick={handleUpload}> Translate and process an image.</button>
    </div>
    {isSuccessful && <Alert key={0}
                            variant={"success"}>
      This is a successful to the S3 bucket.
    </Alert>}
  </div>
}

export default UploadImageToS3WithNativeSDK;