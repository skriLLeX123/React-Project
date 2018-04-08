import React, { Component } from 'react';


class Blog1 extends Component {
  render() {
    return (
      <div className="item1">
      <table className="javascrpt">

      <tr><td><img src={require('./images/ang.png')} alt=" " width='100' height='100'/><h1>
      AngularJS</h1></td><td className="date">03/30/2018</td></tr>
      <tr><td colspan='2' className="td1">
      <p>AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets
      you extend HTML's syntax to express your application's components clearly and succinctly. AngularJSs data binding and
      dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser,
      making it an ideal partner with any server technology. AngularJS is what HTML would have been, had it been designed for
      applications.It can be added to an HTML page with a script tag. AngularJS extends HTML attributes with Directives, and
      binds data to HTML with Expressions. AngularJS extends HTML with ng-directives. The ng-app directive defines an AngularJS application.</p>
      </td></tr>

      <tr><td><img src={require('./images/nodejs.png')} alt=" "  width='100' height='100'/>
      NodeJS</td><td className="date">03/30/2018</td></tr>
      <tr> <td colspan='2' className="td1">
      <p>Node.js is a platform built on Chromes JavaScript runtime for easily building fast and scalable network applications.
      Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive
      real-time applications that run across distributed devices. Node.js is an open source, cross-platform runtime environment
      for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within
      the Node.js runtime on OS X, Microsoft Windows, and Linux.</p></td>
       </tr>

       <tr><td><img src={require('./images/react.png')} alt=" " width='100' height='100'/>
       ReactJS</td><td className="date">03/30/2018</td></tr>
       <tr> <td colspan='2' className="td1">
       <p>ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single
       page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.
       React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011
       and on Instagram.com in 2012. React allows developers to create large web applications which can change data, without reloading the page.
       The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in application.</p></td>
        </tr>
       </table>
      </div>
    );
  }
}

export default Blog1;
