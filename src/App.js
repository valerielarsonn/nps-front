// import About from "./pages/About";
import AllPosts from "./pages/AllPosts";
// import Main from "./pages/Main";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form"

import './App.css';

import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

function App(props) {
  const url = "https://nps-projectfour.herokuapp.com/";

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>BLM Postings around National Parks</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps} posts={posts}/>
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps} />}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>    
    </div>
  );
}

export default App;
