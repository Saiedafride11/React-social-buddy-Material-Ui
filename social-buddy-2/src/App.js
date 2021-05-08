import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About/About';
import AllPost from './component/AllPost/AllPost';
import Banner from './component/Banner/Banner';
import Comment from './component/Comment/Comment';
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Post from "./component/Post/Post";

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Banner></Banner>
            </Route>
            <Route path="/home">
                <Post></Post>
            </Route>
            <Route path="/comment/:id">
                <Comment></Comment>
            </Route>
            <Route path="/allPost">
                <AllPost></AllPost>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
