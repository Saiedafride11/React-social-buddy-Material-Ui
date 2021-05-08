import React from 'react';
import './Categorys.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
const Categorys = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return (
        <div className="category " >
            <h6 className="" >Category</h6>
                <div className={classes.root}>
      <List  component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Vault Keys Giveway" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Misc Guns Locations" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Looking for Players" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Stupid Bugs  Solves" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemText primary="Video  Audio Drivers" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemText primary="2K Official Forums" />
        </ListItem>
      </List>
    </div>
        </div>
    );
};
export default Categorys;