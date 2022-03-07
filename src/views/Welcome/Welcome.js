import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  welcome_page: {
    background:
      "linear-gradient( to right, white 0%, white 50%, black 50%,black 100%)",
  },

  text: {
    color: "white",
    whiteSpace : "nowrap",
    fontSize: "5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    "&::before": {
      content: "attr(data-heading)",
      position: "absolute",
      left: "0",
      color: "black",
      width: "50%",
      overflow: "hidden",
    },
  },
}));

export const Welcome = () => {
  
  const classes = useStyles();
  const navigate = useNavigate();
  
  return (
    <Box height="calc(100vh - 65px)" className={classes.welcome_page}>
      <Typography
        className={classes.text}
        data-heading="WELCOME"
        onClick = {()=>{navigate("/login")}}
      >
        WELCOME
      </Typography>
    </Box>
  );
};
