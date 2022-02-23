import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';
import './PostsList.css'


export const PostsList = (props) => {

  const [posts , setPosts] = useState([]);

  useEffect(
    () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => {
      return response.json()
    })
    .then((data)=>{
      let allPosts = data;
      let user     = props.userLoggedIn
      let userPosts = allPosts.filter((post,index) => {
        return post.userId === user.id
      })
      setPosts(userPosts)
    })
  }
  ,[])

  return (
    <div className='post-list-container'>
      {posts.map((post,index)=>{
        return (
          <PostCard key = {index} post={post} />
        )
      })}
    </div>
  )
}
