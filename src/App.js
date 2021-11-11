import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import RenderId from './components/RenderId'
import RenderNew from './components/RenderNew'
import Dictaphone from './components/Dictaphone';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd'
import DragDrop from './components/DragDrop'
import RecSpeech from './components/RecSpeech'
import './App.css';


import Main from './components/Main';
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      apiResponse : '',
      text : 'hi',
      showComponent : false,
      speechtext:'null'
    }
  }
 
 

  // componentWillMount(){
  //   fetch('http://localhost:3001/speechAPI')
  //   .then(res => res.text())
  //     .then(res=>this.setState({
  //      speechtext : res
  //     }))
 
  // }

  render() {
   const callAPI=()=>{
      fetch('http://localhost:3001/testAPI')
      .then(res => res.text())
      .then(res=>this.setState({
        apiResponse : res
      }))
      .then(()=>{
        console.log("this response "+this.state.apiResponse)
        if(this.state.apiResponse=='1')
         this.setState({
           text : 'wait',
           showComponent : true
          })
        if(this.state.apiResponse=='2')
         this.setState({text : 'Hardware',showComponent : true})
        if(this.state.apiResponse=='3')
         this.setState({text : 'component3',showComponent : true})
        if(this.state.apiResponse=='component 4')
         this.setState({text : 'wait',showComponent : true})
      })
  
    
      
    }
  
    
    return (
        
      // <DndProvider backend={HTML5Backend}>
        <div className="App">
        {/* <DragDrop/> */}
          {/* <Main/> */}
          {console.log(this.state.speechtext)}
          {console.log(this.state.text)}
          {/* <Dictaphone/> */}
          <RecSpeech/>
          <Button variant="success" onClick={callAPI} >Start</Button>
          <RenderNew text={this.state.text} showComponent={this.state.showComponent}/>
         
                
        </div>
      // </DndProvider>
      
    );
  }
}

export default App;
