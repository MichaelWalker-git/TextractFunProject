import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';

export const config = {
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
    },
    aws_appsync_graphqlEndpoint: 'https://m2rxodkg3zfjbic6flss4pjvjq.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(config);

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
