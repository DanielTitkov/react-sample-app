const initState = {
    posts: [
        {id: "1", title: "mook1", body: "whoa1"},
        {id: "2", title: "mook2", body: "whoa2"},
        {id: "3", title: "mook3", body: "whoa3"},
    ]
}

const rootReducer = (state=initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer