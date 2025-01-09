import React from 'react';

//imports components to read from URL and show associated component page
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return <Router>
    <MainNavigation />

    <main>
      {/*Switch ensure no redirect if a valid Route is found*/}
      <Switch>

        {/*Each Route is for a page component */}
        {/*'exact' is used to make sure path is exact to show component*/}
        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        {/* ':userID' is a dynamic segment*/}
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>

        {/*Redirect sends back to path of no Route found*/}
        <Redirect to="/"/>
      </Switch>
    </main>
  </Router>
}

export default App;


/*
1st: npm install
2nd: npm install react-scripts@5
3rd: npm install --save react-router-dom@5 --save-exact
4th: npm start
 */