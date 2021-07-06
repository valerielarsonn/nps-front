import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Post from "../components/Post";
import NPS from "../Services/NPS";
import PostService from "../Services/PostService";

import "../styles.scss";


const ParkDetails = (props) => {
    const parkid = props.match.params.id
    const [park, setPark] = useState(null);
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        NPS.getParks(parkid).then(park => {
            console.log(park);
            setPark(park.data[0]);
        });
        PostService.getPosts(parkid).then(posts => {
            console.log(posts);
            setPosts(posts);
        });
    }, [])

    
    
    const editPost = (post) => {
        history.push(`/parks/${parkid}/posts/${post.id}/edit`)
    }

    const deletePost = async (postToDelete) => {
       await PostService.deletePost(postToDelete);
       const updatedPosts = posts.filter (post => postToDelete.id != post.id)
       console.log(updatedPosts)
       setPosts(updatedPosts)
    }
    

    return (
        <div className="App">
        { park && <h1>{park.fullName}</h1>}
        { park && <h3>STATE: {park.states}</h3>}
        { park && <h3>{park.latLong}</h3>}
        { park && <a target="_blank" href={park.url}>NPS WEBSITE</a>}
        { park && <h4>{park.description}</h4>}
        { park && <Link to={`/parks/${park.id}/posts/create`}><button>Create a new Posting</button></Link> }
        {posts.map((post) => <Post post={post} editPost={editPost} deletePost={deletePost} key={post.id}/>)}
        </div>
    );
}

export default ParkDetails;