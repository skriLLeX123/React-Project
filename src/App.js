import React, { Component } from 'react';

import Header from './components/headerComponents/header.js';
import './Assets/css/default.min.css';
import Footer from './components/footerComponents/footer.js';
import Homepage from './components/pages/homepage.js';
import Navigation from './components/pages/navigation.js';
import Blog1 from './components/pages/Blog1.js'
import Blog2 from './components/pages/Blog2.js'
import Blog3 from './components/pages/Blog3.js'
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
<div className="grid-container">
<Route exact path='/' component={Homepage}/>
<Route exact path='/Blog1' component={Blog1}/>
<Route exact path='/Blog2' component={Blog2}/>
<Route exact path='/Blog3' component={Blog3}/>
<Navigation/>
</div>
<Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
