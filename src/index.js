import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
// import awsConfig from './aws-exports';

Amplify.configure({
    Auth: {
        identityPoolId: "us-east-1:d3bcc81d-a383-4e06-ac53-9ec41e849545",
        region: "us-east-1",
        userPoolId: 'us-east-1_I56yVUq43',
        userPoolWebClientId: '3hhsjr6vaqle30h5qeuu50evq7',
    },
    Storage: {
        AWSS3: {
            bucket: 'uploaded-img-bucket', //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
