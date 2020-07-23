import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './components/NavigationBar.js';
import Footer from './components/Footer.js';

//Pages
import MainPage from './Pages/Index.js';
import TechPage from './Pages/TechPage.js';
//import ProjectsPage from './Pages/Projects.js';
import NotFoundPage from './Pages/404Page.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Tech" component={TechPage} />
          {/* <Route exact path="/Projects" component={ProjectsPage} /> */}
          <Route exact path="/NotFound" component={NotFoundPage} />
          <Redirect to="/NotFound" />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
