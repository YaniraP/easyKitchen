import './getStarted.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function GetStarted () {

  const classes = useStyles();

  return (
    <div className="container-home">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      Let's cook!
      <div className={classes.root}>
        <Button variant="contained" color="secondary" component={Link} to='/add_dish' style={{ background: 'black', marginTop: "550px" }}>
          Get started
      </Button>
      </div>
    </div>
  )
}

export default GetStarted;

