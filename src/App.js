import './App.css';
import UploadImageToS3WithNativeSDK from "./UploadImageToS3WithNativeSDK";
import {withAuthenticator} from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <UploadImageToS3WithNativeSDK/>
    </div>
  );
}

export default withAuthenticator(App);
