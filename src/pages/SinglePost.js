import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ posts, match, edit, deletePost }) => {
    const id = parseInt(match.params.id);
    const post = posts.find((post) => post.id === id);
    
    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto",
    };
    
    return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h2>{post.coordinates}</h2>
            <h2>{post.posting}</h2>
            <h2>{post.image}</h2>
            <h2>{post.creation_date}</h2>
            <button onClick={(event) => edit(post)}>Edit</button>
            <button onClick={(event) => deletePost(post)}>Delete</button>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
};



export default SinglePost;