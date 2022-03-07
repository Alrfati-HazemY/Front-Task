import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';
import { PostComment } from './PostComment';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core';
import {fetchAllPosts} from './services/PostService'
import {fetchAllComments} from './services/CommentService'


const useStyles = makeStyles((theme)=>({
    post_list_container : {
        backgroundColor: "#626477",
        paddingTop: "60px",
        paddingBottom: "30px",
        minHeight: "calc(100vh - 65px)",
        display : "flex",
        justifyContent : "center"
      },
      [theme.breakpoints.down("md")] : {
        post_list_container : {
          padding : "20px 10px 10px 10px"
        }
      }
})) 

export const PostDetails = (props) => {

    const classes = useStyles();

    let { id } = useParams(); 

    const [post , setPost] = useState({})

    const [comments , setComments] = useState([]);


    useEffect(
        () => {

          const fetchPostComments = async () => {
            let allPosts  = await fetchAllPosts();
            let post      = allPosts.filter((ele,index) => {
                        return ele.id === +id
                    })[0]
                    setPost(post);

            let allComments = await fetchAllComments();
            let comments = await allComments.filter((ele,index) => {
              return ele.postId === +id
          })
              setComments(comments);
            }
            fetchPostComments();
        }
    , [])

  return (
    <Container maxWidth="xl" className={classes.post_list_container}>
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
    </Container>

  )
}
