import React, {Component} from 'react'

export default class Like extends Component {
    state = {
        likes: 0
      };
    addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };
    render() {
        return(
            <button onClick={this.addLike}>Likes: {this.state.likes} </button>
        ) 
    }
}
