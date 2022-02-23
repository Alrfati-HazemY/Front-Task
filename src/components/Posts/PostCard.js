import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useParams } from "react-router-dom";
import './PostCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0px auto 25px auto",
  },
});

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
      <CardActions>
        {id ? (
          <>
            <Link className="post-comment-link" to='/'>
              <Button variant="contained" size="small" color="secondary">
               Back
              </Button>
            <h2 className="comments-head" >Comments</h2>
            </Link>
          </>
        ) : (
          <>
            <Link to={`posts/${props.post.id}`}>
              <Button variant="contained" size="small" color="primary">
                Show All comments
              </Button>
            </Link>
          </>
        )}
      </CardActions>
      {props.children}
    </Card>
  );
}
