
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


async function userPosts() {
    try {
        const user = { name: "John", lastActivityTime: null, posts: [] }
        const post = await createPost("Hello World")
        user.posts.push(post)
        const lastActivityTime = await updateLastUserActivityTime(user)
        console.log("All posts created:");
        console.log(user.posts);
        const deletedPost = await deletePost(user.posts[user.posts.length - 1])
        const updatedPosts = user.posts.filter((post) => post !== deletedPost);
        console.log("New set of posts:");
        console.log(updatedPosts);
    } catch (err) {
        console.log(err)
    }
}

userPosts()