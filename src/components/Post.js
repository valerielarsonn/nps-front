import React from "react";


const Post = ({ post, editPost, deletePost }) => {

    return(
        <div className="postdiv">
            <h1>BLM LOCATION NAME: {post.name}</h1>
            <h2>{post.coordinates}</h2>
            <h2>POSTING: {post.posting}</h2>
            <img className="image" src={post.image}/>
            <h2>CREATED ON: {post.created_at}</h2>
            <button onClick={(event) => editPost(post)}>Edit</button>
            <button onClick={(event) => deletePost(post)}>Delete</button>
        </div>
    );
};

export default Post;