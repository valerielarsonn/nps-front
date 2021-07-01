import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ posts, match }) => {
    const id = parseInt(match.params.id);
    const post = posts.find((post) => post.id === id);
    return (
        <div>
            <h1>{post.name}</h1>
            <h2>{post.coordinates}</h2>
            <h2>{post.posting}</h2>
            <h2>{post.image}</h2>
            <h2>{post.creation_date}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
};



export default SinglePost;