export const fetchAllComments = async() => {
    const response    = await fetch('https://jsonplaceholder.typicode.com/comments');
    const allComments    = await response.json();
    return allComments;
}