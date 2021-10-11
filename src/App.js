import './App.css';
import UploadImageToS3WithNativeSDK from "./UploadImageToS3WithNativeSDK";
import {withAuthenticator} from "@aws-amplify/ui-react";
import Table from 'react-bootstrap/Table';
import {API, Auth} from "aws-amplify";
import {useEffect, useState} from "react";
import * as queries from './graphql/queries';
import {Button, Container, FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";

function UploadedImgTextTable(props) {

    return (
        <div className={"wrapper"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Translated Text</th>
                    <th>Raw Text</th>
                    <th>Source Language</th>
                    <th>Does it match config text?</th>
                </tr>
                </thead>
                <tbody>
                {props.documents.length > 0 && props.documents.map((item, idx) =>
                    <tr key={`${item.documentId}${idx}`}>
                        <td>{item.translated_text || ""} </td>
                        <td>{item.raw_text || ""}</td>
                        <td>{item.src_lang || ""}</td>
                        <td>{item.translated_text === props.targetText ? 'true' : 'false'}</td>
                    </tr>
                )}

                </tbody>
            </Table>
        </div>

    );
}

const NavigationBar  =() => {
    async function handleLogout() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (  <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onSelect={handleLogout}>Logout</Nav.Link>
            </Nav>
        </Container>
    </Navbar>);
}



function App() {
    const [documents, setDocs] = useState([]);
    const [masterText, changeMasterText] =useState("");

    function handleTextChange(ev) {
        ev.preventDefault();
        changeMasterText(ev.target.value)
    }

    useEffect(() => {
        return fetchDocs();
    }, []);


    const fetchDocs = () => {
        const allOutputs = async () => {
            API.graphql({
                query: queries.listOutputTables,
                auth: 'AMAZON_COGNITO_USER_POOLS'
            })
                .then((res) => setDocs(res.data.listOutputTables.items));
        }

        return allOutputs();
    }

    const addSubscription = (newValue) => {
        const newCopyWithSub = [...documents, newValue];
        setDocs(newCopyWithSub);
    }


    return (
    <div className="App">
        <NavigationBar/>

        <br/><br/><br/><br/>
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Comparison Text</InputGroup.Text>
                <FormControl
                    placeholder="ConfigText"
                    aria-label="ConfigText"
                    aria-describedby="basic-addon1"
                    onChange={handleTextChange}
                />
            </InputGroup>
        </div>
        <br/>

      <UploadImageToS3WithNativeSDK addSubscription={addSubscription}/>
        <Button variant="primary"
        onClick={fetchDocs}>Refresh Table</Button>{' '}
        <UploadedImgTextTable documents={documents}
                              targetText={masterText}/>


    </div>
  );
}

export default withAuthenticator(App);
