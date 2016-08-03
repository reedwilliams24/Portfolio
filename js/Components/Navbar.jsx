var React = require('react');

var Navbar = React.createClass({
  render: function(){
    return (
      <div id='navbar'>
        <a href="docs/resume.pdf">Resume</a>
        <a href="https://github.com/reedwilliams24">Github</a>
        <a href="https://www.linkedin.com/in/reedjwilliams24">LinkedIn</a>
      </div>
    );
  }
});

module.exports = Navbar;
