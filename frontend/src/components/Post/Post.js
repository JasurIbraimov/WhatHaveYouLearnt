import React from "react";
import "./Post.css";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Badge,
    ListGroup,
    ListGroupItem,
    Button,
} from "reactstrap";
const Post = ({
    deletePost,
    description,
    links,
    tags,
    likeCount,
    selectedFile,
    creator,
}) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src={
                        selectedFile ||
                        "https://picsum.photos/900/270?grayscale"
                    }
                    style={{
                        height: 300,
                    }}
                    width="100%"
                />
                <CardImgOverlay className="overlay">
                    <div>
                        <CardTitle tag="h5">
                            {description.slice(0, 30)}
                        </CardTitle>
                        <CardText>{description}</CardText>
                        <CardText>
                            Tags:
                            {tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    color="success"
                                    className="m-1"
                                    pill
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </CardText>
                        <ListGroup>
                            Links:
                            {links.map((link, index) => (
                                <ListGroupItem
                                    key={index}
                                    color="success"
                                    style={{ fontSize: 12 }}
                                >
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={link}
                                        style={{ color: "green" }}
                                    >
                                        {link.length > 25
                                            ? link.slice(0, 25) + "..."
                                            : link}
                                    </a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                    <CardText className="buttons">
                        <Button color="success" className="mt-3">
                            {" "}
                            {likeCount}{" "}
                            <i className="bi bi-hand-thumbs-up-fill"></i> Like
                        </Button>
                        <Button
                            color="danger"
                            className="mt-3"
                            onClick={deletePost}
                        >
                            {" "}
                            Delete{" "}
                        </Button>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default Post;
