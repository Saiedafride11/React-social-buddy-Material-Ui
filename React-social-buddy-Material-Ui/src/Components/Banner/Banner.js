import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Typography, Box } from '@material-ui/core';
import './Banners.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));
const Banner = () => {
  const classes = useStyles();

  return (
    <Box>
      <div className="web-Banner" >
        <Typography component="h4" variant="h4">
                        Search for your post
                                            </Typography>
        <Typography component="p"  m={2} variant="p">If you have any question you can ask below or enter what you are looking for!</Typography>

        <div className="input-group input-group-lg w-50 mx-auto">
          <div className={classes.root}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8, width: "30rem", backgroundColor: "white" }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </div>
          <Box className="input-group-prepend">
            <Button variant="contained" color="primary"  >
              Search
            </Button>

          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Banner;