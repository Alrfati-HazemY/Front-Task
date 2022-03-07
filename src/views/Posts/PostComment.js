import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  author : {
    display: "block",
    marginBottom: "10px",
}
 }))

export const PostComment = (props) => {
  const classes = useStyles();
  return (
    <Container>
    <Box>
      <Box >
        <b className={classes.author}>{props.comment.email}</b>
        <Box className="text">
          {props.comment.body}
        </Box>
      </Box>
    </Box>
</Container>  
  )
}
