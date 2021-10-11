import React, {useState} from 'react';
import {Storage, API, graphqlOperation} from 'aws-amplify';
import {Alert} from "react-bootstrap";
import {onUpdateOutputTable, onCreateOutputTable} from "./graphql/subscriptions";

class UploadImageToS3WithNativeSDK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessful: false,
            selectedFile: null,
            subscription: null,
        }
    }

    componentDidMount() {
        const sub = API.graphql(
            graphqlOperation(onCreateOutputTable)
        ).subscribe({
            next: (newEntry) => {
                this.props.addSubscription(newEntry.value.data.onCreateOutputTable);
                console.log(newEntry, "newEntry - create")
            }
        });

      const sub2 = API.graphql(
          graphqlOperation(onUpdateOutputTable)
      ).subscribe({
        next: (newEntry) => {
          this.props.addSubscription(newEntry.value.data.onCreateOutputTable);
          console.log(newEntry, "newEntry - uupdate")
        }
      });
        this.setState(() => {
            return {subscription: [sub, sub2]}
        })
    }

    handleFileInput = (e) => {
        this.setState((state, props) => {
            return {selectedFile: e.target.files[0]}
        });
    }

    uploadFile = async (file) => {
        try {
            await Storage.put(file.name, file);
        } catch (error) {
            console.log('Error uploading file: ', error);
        }
    }

    handleUpload = () => {
        return this.uploadFile(this.state.selectedFile).then((res, err) => {
            this.setState((state, props) => {
                return {isSuccessful: true}
            });

        })
    }

    render() {
        return <div className={"inputDropZoneBody"}>
            <h1 className={"inputTitle"}>Octane Img Uploader</h1>
            <div className={"inputContainer"}>
                <input type="file" onChange={this.handleFileInput}/>
            </div>
            <div className={"buttonContainer"}>
                <button onClick={this.handleUpload}>
                    Translate and process an image.
                </button>
            </div>
            {this.state.isSuccessful && <Alert key={0}
                                               variant={"success"}>
                This is a successful to the S3 bucket.
            </Alert>}
        </div>
    }

}

export default UploadImageToS3WithNativeSDK;