
import ParkDetails from "../pages/ParkDetails";
import Create from "../pages/Create"
import Edit from "../pages/Edit"
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import PostService from "../Services/PostService";
// import Form from "./Form";

import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
// import { Redirect } from "react-router";

function Main(props) {

    const URL = "https://nps-projectfour.herokuapp.com/nps"
    

    const [posts, setPosts] = useState(null);
    const nullPost = {
        name: "",
        coordinates: "",
        posting: "",
        image: "",
    };

    const [targetPost, setTargetPost] = useState(nullPost);



    useEffect(() => {
        PostService.getPosts();
    }, []);

    return (
    <div>
      {/* <Link to="/park/:id/create"><button>Create a new Posting</button></Link> */}
      <Switch>
      <Route
          exact
          path="/home"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/park/:id"
          render={(routerProps) => <ParkDetails {...routerProps} />}
        />
        {/* <Route
          path="/park/:id/posts/:id"
          render={(routerProps) => (
            <PostDetails 
              {...routerProps} 
              posts={posts} 
            //   edit={getTargetPost}
              deletePost={PostService.deletePost} 
            />
          )}
        /> */}
        <Route
          path="/park/:parkid/create"
          render={(routerProps) => (
            <Create 
              {...routerProps}
              initialPost={nullPost}
              handleSubmit={PostService.addPosts}
              buttonLAbel="create post"
            />
          )}
        />
        <Route
          path="/parks/:parkid/posts/:postid/edit"
          render={(routerProps) => (
            <Edit
              {...routerProps} 
              initialPost={targetPost}
              handleSubmit={PostService.updatePost}
              buttonLabel="update post"
            />
          )}
        />
      </Switch>    
    </div>
  );
}

export default Main;