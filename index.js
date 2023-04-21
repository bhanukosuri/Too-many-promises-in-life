function createPost(post) {
    // return a promise that resolves after 1 second with the created post
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post "${post}" created`);
            resolve(post);
        }, 1000);
    });
}

   
function updateLastUserActivityTime(user) {
    // return a promise that resolves after 1 second with the updated user object
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            console.log(`User "${user.name}" last activity time updated to ${user.lastActivityTime}`);
            resolve(user);
        }, 1000);
    });
}

function deletePost(post) {
    // return a promise that resolves after 1 second with the deleted post
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post "${post}" deleted`);
            resolve(post);
        }, 1000);
    });
}

// usage example
const user = { name: "John", lastActivityTime: null, posts: [] };
createPost("Hello world")
.then((post) => {
    user.posts.push(post);
    return updateLastUserActivityTime(user);
})
.then((updatedUser) => {
    console.log("All posts created:");
    console.log(updatedUser.posts);
    return deletePost(updatedUser.posts[updatedUser.posts.length - 1]);
})
.then((deletedPost) => {
    const updatedPosts = user.posts.filter((post) => post !== deletedPost);
    console.log("New set of posts:");
    console.log(updatedPosts);
})
.catch((error) => console.error(error));