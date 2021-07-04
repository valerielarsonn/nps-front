import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// process.env.REACT_APP_BACKEND

const SinglePost = (props) => {
    const deletePost = async (post) => {
        const response = await fetch(process.env.REACT_APP_BACKEND + post.id + "/", {
          method: "delete",
        });
    
        // getPosts();
        props.history.push("/");
    }
    
    useEffect(() => {
        // getPosts();
    }, []);
    
    return (
        <h1>Single Post Page</h1>
    )
};



export default SinglePost;