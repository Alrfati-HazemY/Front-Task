import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';
import { PostComment } from './PostComment';


export const PostDetails = (props) => {

    let { id } = useParams(); 

    const [post , setPost] = useState({})

    const [comments , setComments] = useState([]);


    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then( (response) => {
                return response.json()
              })
              .then((data)=>{
               let post2 = data.filter((ele,index) => {
                      return ele.id === +id
                  })[0]
                  setPost(post2);
            })
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then( (response) => {
                return response.json()
              })
              .then((data)=>{
                  let comments = data.filter((ele,index) => {
                      return ele.postId === +id
                  })
                  setComments(comments);
            })
        }
    , [])

    


  return (
    <div className='post-list-container'>
        <PostCard key={post.id} post={post}>
        {comments.map((comment,index) => {
            return(
                <>
                <PostComment key={comment.id} comment={comment} />
                <hr />
                </>
            )
        })}
        </PostCard>
    </div>

  )
}
