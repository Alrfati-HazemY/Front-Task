import React, { useContext, useEffect, useState } from 'react'
import PostCard from './PostCard';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core';
import { LoginCtx } from '../../context/LoginContex';
import {fetchAllPosts} from './services/PostService'

const useStyles = makeStyles((theme)=>({
  post_list_container : {
    backgroundColor: "#626477",
    padding: "60px 100px 30px 100px",
    minHeight: "calc(100vh - 65px)",
    display : "flex",
    flexWrap : "wrap",
    justifyContent:"space-between",
  },
  [theme.breakpoints.down("md")] : {
    post_list_container : {
      flexDirection : "column",
      alignItems : "center",
      padding : "20px 10px 10px 10px"
    }
  }
}))


export const PostsList = (props) => {

  const {userLoggedIn } = useContext(LoginCtx);

  const classes = useStyles();
  
  const [posts , setPosts] = useState([]);

  useEffect(
    () => {
    const fetchMyposts = async () => {
      let allPosts  = await fetchAllPosts();
      let user      = userLoggedIn;
      let userPosts = allPosts.filter((post,index) => {
            return post.userId === user.id
          })
      setPosts(userPosts);
    }
    fetchMyposts();
  }
  ,[])

  return (
    <Container maxWidth="xl" className={classes.post_list_container}>
      {posts.map((post,index)=>{
        return (
          <PostCard key = {index} post={post} />
        )
      })}
    </Container>
  )
}
