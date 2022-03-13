import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link, useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width : "30%",
    minHeight: "340px",
    position: "relative",
    marginBottom : "1.5em"
  },
  comments_head : {
    paddingTop: "10px",
    borderTop : "1px solid black",
    paddingLeft:"8px",
  },
  post_comment_link : {
    display: "block",
    width:"100% ",
    marginLeft : "10px"
},

 comment_btn : {
  position : "absolute",
  bottom: "10px",
  left : "10px"
 },

 [theme.breakpoints.down("sm")] : {
  root : {
   width:"60%",
   minHeight: "420px",
  }
},

[theme.breakpoints.down("xs")] : {
  root : {
   width:"80%",
   minHeight: "420px",
  }
}


}));

export default function PostCard(props) {
  const classes = useStyles();

  const { id } = useParams();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/10635711/pexels-photo-10635711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box className={classes.card_action} >
        {id ? (
          <>
            <Link className={classes.post_comment_link} to='/'>
              <Button variant="contained" size="small" color="secondary">
               Back
              </Button>
            <h2 className={classes.comments_head} >Comments</h2>
            </Link>
          </>
        ) : (
          <>
            <Link className={classes.comment_btn} to={`posts/${props.post.id}`}>
              <Button variant="contained" size="small" color="primary">
                Show All comments
              </Button>
            </Link>
          </>
        )}
      </Box>
      {props.children}
    </Card>
  );
}
