import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return(
        <div>
            <Link to={`/post/${post.id}`}>
                <h1>{post.name}</h1>
            </Link>
            <h2>{post.coordinates}</h2>
            <h2>{post.posting}</h2>
            <h2>{post.image}</h2>
            <h2>{post.creation_date}</h2>
        </div>
    );
};

export default Post;