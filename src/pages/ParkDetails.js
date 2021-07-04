import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import NPS from "../Services/NPS";
import PostService from "../Services/PostService"



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
       setPosts(updatedPosts)
    }
    

    return (
        <div>
        { park && <h1>{park.fullName}</h1>}
        {posts.map((post) => <Post post={post} editPost={editPost} deletePost={deletePost} key={post.id}/>)}
        </div>
        // <Link to={`/park/${park.id}`}>{park.name}</Link>
    );
}

export default ParkDetails;