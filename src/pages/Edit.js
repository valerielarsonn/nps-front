import React, { useEffect, useState } from "react";
import Form from "./Form";
import PostService from "../Services/PostService";

import "../styles.scss";

const Edit = (props) => {
  const [targetPost, setTargetPost] = useState(null);
  const parkId = props.match.params.parkid;
  const postId = props.match.params.postid;
  useEffect(async () => {
    const post = await PostService.getPost(postId)
    setTargetPost(post);
  }, [])

  const onUpdate = (post) => {
    PostService.updatePost({id:postId, ...post})
    .then(() => {
      props.redirect(parkId)
    })
  }

    return (
      <div className= "App">
        { targetPost && <Form
          initialPost={targetPost}
          handleSubmit={onUpdate}
          buttonLabel="update post"
        />}
      </div>
    )
};

export default Edit;