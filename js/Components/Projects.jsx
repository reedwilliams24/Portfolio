var React = require('react');
var $ = require('jquery');

var Projects = React.createClass({
  render: function(){
    return (
      <div id='project-container'>
        Projects
        <div id='projects'>
          <div className='project project-wide'>
            {'800px'}
            <a href="https://github.com/reedwilliams24/800px">
              <img src='./docs/800px.png'/></a>
          </div>

          <div className='project project-tall'>
            {'Bubble Popper'}
            <a href="https://github.com/reedwilliams24/bubblePopper">
              <img src='./docs/bubblePopper.png'/></a>
          </div>

          <div className='project project-tall'>
            {'Minesweeper'}
            <a href="https://github.com/reedwilliams24/Minesweeper">
              <img id='minesweeper-image' src='./docs/minesweeper.png'
                   onMouseEnter={this.mineSweeperOn}
                   onMouseLeave={this.mineSweeperOff}/></a>
            </div>

          <div className='project project-wide'>
            {'ActiveRecordLite'}
            <a href="https://github.com/reedwilliams24/ActiveRecordLite">
              <img src='./docs/activeRecordLite.png'/></a>
          </div>
        </div>
      </div>
    );
  },

  mineSweeperOn: function(e){
    var image = $('#minesweeper-image');
    image.attr('src', './docs/minesweeper.gif');
  },

  mineSweeperOff: function(e){
    var image = $('#minesweeper-image');
    image.attr('src', './docs/minesweeper.png');
  }
});

module.exports = Projects;
