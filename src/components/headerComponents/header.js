import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
<header >
<div className="logo">
Welcome to my First Tech-Blog
</div>
<nav>
<ul>
<li><a href="/">Home</a></li>
</ul>
</nav>
</header>
    );
  }
}

export default Header;
