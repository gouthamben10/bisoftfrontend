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
let showcom= [];
let textcom =[];
let i=-1;
let rescode
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
  componentWillMount(){
    this.callAPI()
  }
  callAPI(){
    console.log("working")
    console.log(i)
     fetch('http://localhost:3001/testAPI')
     .then(res => res.text())
     .then(res=>this.setState({
       apiResponse : res
     }))
     .then(()=>{
       console.log("this response "+this.state.apiResponse)
       if(this.state.apiResponse==='1'){
        this.setState({
          text : 'wait',
          showComponent : true
         })
         i++;
         showcom[i]=true
         textcom[i]='wait'
       }
        
       if(this.state.apiResponse=='2'){
        this.setState({text : 'Hardware',showComponent : true})
        i++
        showcom[i]=true
        textcom[i]='Hardware'
         
       }
        
       if(this.state.apiResponse=='3'){
        this.setState({text : 'component3',showComponent : true})
        i++
        showcom[i]=true
        textcom[i]='component3'
       }
        
       if(this.state.apiResponse=='component 4')
        this.setState({text : 'wait',showComponent : true})
     })
     fetch('http://localhost:3001/testAPI')
     .then(res=>{console.log(res.status)
      // if(res.status=='200')
      //  i++
        this.callAPI()
        rescode=res.status
          
     
    }
    )
   }


  render() {
  //  const callAPI=()=>{
  //    console.log("working")
  //     fetch('http://localhost:3001/testAPI')
  //     .then(res => res.text())
  //     .then(res=>this.setState({
  //       apiResponse : res
  //     }))
  //     .then(()=>{
  //       console.log("this response "+this.state.apiResponse)
  //       if(this.state.apiResponse=='1')
  //        this.setState({
  //          text : 'wait',
  //          showComponent : true
  //         })
  //       if(this.state.apiResponse=='2')
  //        this.setState({text : 'Hardware',showComponent : true})
  //       if(this.state.apiResponse=='3')
  //        this.setState({text : 'component3',showComponent : true})
  //       if(this.state.apiResponse=='component 4')
  //        this.setState({text : 'wait',showComponent : true})
  //     })
  //   }
  
    
    return (
        
      // <DndProvider backend={HTML5Backend}>
        <div className="App">
        {/* <DragDrop/> */}
          {/* <Main/> */}
          {console.log(this.state.speechtext)}
          {console.log(this.state.text)}
          {/* <Dictaphone/> */}
          <RecSpeech/>
          <Button variant="success" >Start</Button>
          {[...Array(100)].map((e, i) => <RenderNew text={textcom[i]} showComponent={showcom[i]}/>)}
          
          {/* <RenderNew text={textcom[2]} showComponent={showcom[2]}/>
          <RenderNew text={textcom[3]} showComponent={showcom[3]}/>
          <RenderNew text={textcom[3]} showComponent={showcom[3]}/> */}
                        
        </div>
      // </DndProvider>
      
    );
  }
}

export default App;