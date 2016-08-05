var React = require('react');

var Description = React.createClass({
  render: function(){
    return (
      <div id='description'>
        <div id='about-me'>
          About Me
          <br/><br/>
          {this.aboutMeText()}
        </div>
        <div id='skills'>
          Skills and Technologies
          <br/><br/>
          {this.skillsText()}
        </div>
      </div>
    );
  },

  aboutMeText: function(){
    var text = 'About me text';
    return text;
  },

  skillsText: function(){
    var text = 'JavaScript, React.js., Ruby, Ruby on Rails, jQuery' +
               'Flux, PostgreSQL, Git, HTML, CSS';
    return text;
  }
});

module.exports = Description;
