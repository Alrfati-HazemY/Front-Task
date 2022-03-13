export const fetchAllPosts = async () => {
    const response    = await fetch('https://jsonplaceholder.typicode.com/posts');
    const allPosts    = await response.json();
    return allPosts;
}

