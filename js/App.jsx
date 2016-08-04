var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Components/Navbar');
var Description = require('./Components/Description');
var Projects = require('./Components/Projects');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar/>
        <div id='name'>Reed Williams</div>
        <div id='title'>Software Developer</div>
        <Description/>
        <Projects/>
      </div>
    );
  }
});

module.exports = App;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App/>, document.getElementById('mount'));
});
