import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64"
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ListGroup,
    ListGroupItem,
    FormText,
    Spinner
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
const AppForm = () => {
    const { created } = useSelector(
        (store) => store.posts
    );
    const [post, setPost] = useState({
        description: "",
        selectedFile: "",
        links: [],
        tags: [],
    });
    const [link, setLink] = useState("");
    const [tag, setTag] = useState("");
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (created) {
            navigate("/")
        }
    }, [created])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        dispatch(createPost({ ...post, creator: "Jasur" }));
        
    };
    const addLink = () => {
        setPost({ ...post, links: [...post.links, link] });
        setLink("");
    };
    const addTag = () => {
        setPost({ ...post, tags: [...post.tags, tag] });
        setTag("");
    };
    return (
        <Form className="container mt-4 mb-4" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="description">
                    What have have you learnt for today?
                </Label>
                <Input
                    id="description"
                    value={post.description}
                    onChange={(e) =>
                        setPost({ ...post, description: e.target.value })
                    }
                    name="description"
                    type="textarea"
                />
            </FormGroup>
            <FormGroup>
                <Label for="selectedFile">Image to the topic (optional)</Label>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) =>  setPost({ ...post, selectedFile: base64 })}
                />
                <FormText>
                    Please provide an image or poster to help users to easier
                    understand the topic!
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="link">Links to the topic (optional)</Label>
                <div className="d-flex flex-row mt-2 mb-2 ">
                    <Input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        id="link"
                        name="link"
                        type="text"
                    />
                    <Button
                        onClick={addLink}
                        className="rounded"
                        color="success"
                    >
                        +
                    </Button>
                </div>
                <ListGroup>
                    {post.links.map((link, i) => (
                        <ListGroupItem key={i}>{link}</ListGroupItem>
                    ))}
                </ListGroup>
            </FormGroup>
            <FormGroup>
                <Label for="tag">Tags to the topic (optional)</Label>
                <div className="d-flex flex-row mt-2 mb-2 ">
                    <Input
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        id="tag"
                        name="tag"
                        type="text"
                    />
                    <Button
                        onClick={addTag}
                        className="rounded"
                        color="success"
                    >
                        +
                    </Button>
                </div>

                <ListGroup>
                    {post.tags.map((tag, i) => (
                        <ListGroupItem key={i}>{tag}</ListGroupItem>
                    ))}
                </ListGroup>
            </FormGroup>
            <Button color="success" className="mt-2">
                    {
                        loading ?  <Spinner color="light"/> : "Submit"   
                    }
            </Button>
        </Form>
    );
};

export default AppForm;
