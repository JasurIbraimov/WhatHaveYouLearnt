import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label, 
    Input,
    Button,
    ListGroup,
    ListGroupItem,
    FormText
} from "reactstrap";

const AppForm = () => {
    const [post, setPost] = useState({
        title: "",
        date: "",
        time: "",
        selectedFile: "",
        links: [],
        tags: []
    })

    return (
        <Form className="container mt-4 mb-4">
            <FormGroup>
                <Label for="title">What have have you learnt for today?</Label>
                <Input id="title" name="title" type="textarea" />
            </FormGroup>
            <FormGroup>
                <Label for="selectedFile">Image to the topic (optional)</Label>
                <Input id="selectedFile" name="selectedFile" type="file" />
                <FormText>
                    Please provide an image or poster to help users to easier understand the topic!
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="link">Links to the topic (optional)</Label>
                <div className="d-flex flex-row mt-2 mb-2 ">
                    <Input id="link" name="link" type="text" />
                    <Button className="rounded" color="success" >+</Button>
                </div>
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                </ListGroup>
            </FormGroup>
            <FormGroup>
                <Label for="tag">Tags to the topic (optional)</Label>
                <div className="d-flex flex-row mt-2 mb-2 ">
                    <Input id="tag" name="tag" type="text" />
                    <Button  className="rounded" color="success">+</Button>
                </div>

                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                </ListGroup>
            </FormGroup>
            <Button color="success" className="mt-2">Submit</Button>
        </Form>
    );
};

export default AppForm;
