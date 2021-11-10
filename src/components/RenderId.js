import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
class RenderId extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : 'test'
        }
        this.textrender = this.textrender.bind(this);
    }
    textrender(){
        if(this.props.apiResponse===1)
            this.setState({text:"hardware"})
            console.log(this.state.text)
    }
    // componentWillMount(){
    //     this.textrender()
     
    //   }
    render() {
        //if(this.props.apiResponse===1)
      
      
        return (
            <div>
                {console.log(this.props.apiResponse)}
                <Button variant="success" >{this.state.text}</Button>
            </div>
        );
    }
}

export default RenderId;