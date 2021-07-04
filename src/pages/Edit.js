import React, { useEffect } from "react";
import Form from "../components/Form"

const Edit = (props) => {

    // const getTargetPost = (post) => {
    //     setTargetPost(post);
    //     props.history.push("/edit");
    // };
    const updatePost = async (post) => {
        const response = await fetch(process.env.REACT_APP_BACKEND + post.id + "/", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
        // getPosts();
    };

    useEffect(() => {
        // getPosts();
    }, []);

    return <h1>Edit Page</h1>
};

export default Edit;