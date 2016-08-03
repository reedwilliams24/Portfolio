var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Components/Navbar');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
});

module.exports = App;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App/>, document.getElementById('mount'));
});
