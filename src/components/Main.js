import ParkDetails from "../pages/ParkDetails";
import Home from "../pages/Home";
import PostService from "../Services/PostService";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

function Main(props) {
    const history = useHistory();
    const [posts, setPosts] = useState(null);


    const redirectToParkDetails = (parkid) => {
      history.push(`/parks/${parkid}`)
    };

    const onAdd = async (post) => {
      const {park_id} = await PostService.addPosts(post)
      redirectToParkDetails(park_id);
    };


    return (
    <div>
      <Switch>
      <Route
          exact
          path="/home"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/parks/:id"
          render={(routerProps) => <ParkDetails {...routerProps} />}
        />

        <Route
          exact
          path="/parks/:parkid/posts/create"
          render={(routerProps) => (
            <Create
              {...routerProps}
              redirect = {redirectToParkDetails}
            />
          )}
        />
        <Route
          exact
          path="/parks/:parkid/posts/:postid/edit"
          render={(routerProps) => (
            <Edit
              {...routerProps}
              redirect = {redirectToParkDetails}
            />
          )}
        />
      </Switch>    
    </div>
  );
}

export default Main;