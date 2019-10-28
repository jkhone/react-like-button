import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  state = {
    counter: 0,
    likes: 'likes'
  }

  handleClick = e => {
    this.setState({
      likes: this.state.counter === 0 ? 'like' : 'likes',
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className='likes'>
        <button className='likebutton' onClick={this.handleClick}>{this.state.counter} {this.state.likes}</button>
      </div>
    )
  }
}

export default MyComponent