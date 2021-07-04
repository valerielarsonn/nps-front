import React from "react";
import Main from "../components/Main"
import { useEffect } from "react";

const Create = (props) => {
    const addPosts = async (newPost) => {
        const response = await fetch(process.env.REACT_APP_BACKEND, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(newPost),
        });
        // getPosts();
      };


    useEffect(() => {
        // getPosts();
    }, []);

    return <h1>New Page</h1>
};

export default Create;