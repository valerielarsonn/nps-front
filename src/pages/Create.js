import React from "react";
import Form from "./Form";
import PostService from "../Services/PostService";

import "../styles.scss";

const Create = (props) => {
  const parkId = props.match.params.parkid;

  const nullPost = {
    name: "",
    coordinates: "",
    posting: "",
    image: "",
    };

  const onAdd = (post) => {
    PostService.addPosts({...post, park_id: parkId})
    .then(() => {
      props.redirect(parkId)
    })
  }


    return (
      <div className= "App">
        <Form
            initialPost= {nullPost}
            handleSubmit={onAdd}
            buttonLabel="create new post"
        />
      </div>
    )
};

export default Create;