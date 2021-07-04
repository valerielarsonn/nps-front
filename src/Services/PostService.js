const URL = process.env.REACT_APP_BACKEND;

const PostService = {
    getPosts: async (parkid) => {
        const response = await fetch(URL + "nps");
        const data = await response.json();
        // setPosts(data);
        return data
    },

    addPosts: async (newPost) => {
        const response = await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        // getPosts();
        const data = await response.json();
        return data
    },

    // getTargetPost: (post) => {
    //     setTargetPost(post);
    //     props.history.push("/edit");
    // };

    updatePost: async (post, id) => {
        const response = await fetch(URL + post.id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }) ;
        // getPosts();
        const data = await response.json();
        return data
    },

    deletePost: async (post) => {
        const response = await fetch(URL + "nps/" + post.id + "/", {
            method: "delete",
        });
        // getPosts();
        const data = await response.json();
        return data
        // props.history.push("/");
    }
}

export default PostService;