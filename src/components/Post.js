import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, editPost, deletePost }) => {
    // const id = parseInt(match.params.id);
    // const post = posts.find((post) => post.id === id);

    // const [posts, setPosts] = useState([]);

    // const nullPost = {
    //     name: "",
    //     coordinates: "",
    //     posting: "",
    //     image: "",
    // };

    // const [targetPost, setTargetPost] = useState(nullPost);
    
    return(
        <div className="postdiv">
            <h1>{post.name}</h1>
            <h2>{post.coordinates}</h2>
            <h2>{post.posting}</h2>
            <h2>{post.image}</h2>
            <h2>{post.creation_date}</h2>
            <button onClick={(event) => editPost(post)}>Edit</button>
            <button onClick={(event) => deletePost(post)}>Delete</button>
        </div>
    );
};

export default Post;