const URL = process.env.REACT_APP_BACKEND;

const PostService = {
    getPosts: async (parkid) => {
        const response = await fetch(URL + "nps");
        const data = await response.json();
        return data
    },

    getPost: async (postId) => {
        const response = await fetch(URL + "nps/" + postId);
        const data = await response.json();
        return data
    },

    addPosts: async (newPost) => {
        const response = await fetch(URL + "nps", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        const data = await response.json();
        return data
    },

    updatePost: async (post, id) => {
        const response = await fetch(URL + "nps/" + post.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }) ;
        const data = await response.json();
        return data
    },

    deletePost: async (post) => {
        const response = await fetch(URL + "nps/" + post.id + "/", {
            method: "delete",
        });
    }
}

export default PostService;