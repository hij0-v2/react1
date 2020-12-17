import React, {Component} from 'react';
import Like from './Like.jsx'


export default class Discount extends Component {
    constructor(props){
        super(props);
        this.state={message: 'No discount'};
    }
    clickHandler(){
        this.setState({
            message:'Ok 10% discount now suck mi duck :)'
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}>PLZ</button>
                <Like/>
            </div>
        )
    }
}
