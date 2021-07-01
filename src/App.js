// import About from "./pages/About";
import AllPosts from "./pages/AllPosts";
// import Main from "./pages/Main";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form"

import './App.css';

import React, { useState, useEffect } from "react";

import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "black",
    display: "block",
    margin: "auto",
  };

  const url = "https://nps-projectfour.herokuapp.com/nps";

  const [posts, setPosts] = useState([]);

  const nullPost = {
    name: "",
    coordinates: "",
    posting: "",
    image: "",
  };

  const [targetPost, setTargetPost] = useState(nullPost);

  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  const addPosts = async (newPost) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(newPost),
    });
    getPosts();
  };

  const getTargetPost = (post) => {
    setTargetPost(post);
    props.history.push("/edit");
  };

  const updatePost = async (todo) => {
    const response = await fetch(url + posts.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    });
    getPosts();
  };

  const deletePost = async (post) => {
    const response = await fetch(url + post.id + "/", {
      method: "delete",
    });

    getPosts();
    props.history.push("/");
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>BLM Postings around National Parks</h1>
      <Link to="/new"><button style={button}>Create a new Posting</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost 
              {...routerProps} 
              posts={posts} 
              edit={getTargetPost}
              deletePost={deletePost}
            />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              initialPost={nullPost}
              handleSubmit={addPosts}
              buttonLAbel="create post"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form 
              {...routerProps} 
              initialPost={targetPost}
              handleSubmit={updatePost}
              buttonLabel="update post"
            />
          )}
        />
      </Switch>    
    </div>
  );
}

export default App;
