import React, { Component } from 'react';
// import './Seekbar.css'; // Import your CSS file

class Seekbar extends Component {
    
  constructor(props) {
    super(props);
    // const { width } = this.props;
    this.state = {
      position: 0,
      direction: 1, // 1 for right, -1 for left
    };
  }

  componentDidMount() {
    this.animateSeekbar();
  }

  animateSeekbar = () => {
    const { position, direction } = this.state;
    const { speed } = this.props;
    const { parentWidth, headWidth } = this.getDimensions();
  
    this.setState({ position: position + direction * speed });
  
    if (position + headWidth >= parentWidth) {
      this.setState({ direction: -1 });
    } else if (position <= 0) {
      this.setState({ direction: 1 });
    }
  
    requestAnimationFrame(this.animateSeekbar);
  };
  

  getDimensions = () => {
    const parentElement = document.getElementById('seekbar-parent'); // Use a parent element with id 'seekbar-parent'
    const parentWidth = parentElement.offsetWidth;
    const headWidth = 20; // Adjust as needed
    return { parentWidth, headWidth };
  };

  render() {
    const { width, color } = this.props;
    const { position } = this.state;

    const seekbarStyle = {
      width: width,
      backgroundColor: 'rgba(130, 35, 220, 0.7)',
      height: '4px',
      position: 'relative',
    };

    const headStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: color,
      position: 'absolute',
      left: `${position}px`,
      top: '-3px',
    };

    return (
      <div id="seekbar-parent" style={seekbarStyle}>
        <div style={headStyle}></div>
      </div>
    );
  }
}

export default Seekbar;
