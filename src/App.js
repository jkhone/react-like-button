import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  state = {
    counter: 0,
  }

  handleClick = e => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
 
  render() {
    if (this.state.counter === 1) {
      this.state.likes = 'like'
    } else {
      this.state.likes = 'likes'
    }

    return (
      <div className='likes'>
        <button className='likebutton' onClick={this.handleClick}>{this.state.counter} {this.state.likes}</button>
      </div>
    )
  }
}

export default MyComponent