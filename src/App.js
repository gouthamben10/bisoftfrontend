import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
//import RenderId from './components/RenderId'
import RenderNew from './components/RenderNew'
//import Dictaphone from './components/Dictaphone';
//import { HTML5Backend } from 'react-dnd-html5-backend';
// import {DndProvider} from 'react-dnd'
// import DragDrop from './components/DragDrop'
import RecSpeech from './components/RecSpeech'
import { Messaging,Coin,FlippingSquare } from "react-cssfx-loading";
import './App.css';


//import Main from './components/Main';
let showcom= [];
let textcom =[];
let timecom =[]
let i=-1;
//let rescode
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      apiResponse : '',
      text : 'hi',
      showComponent : true,
      showComponentfetch : false,
      showcondition: false,
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
    //console.log("working")
   // console.log(i)
     fetch('http://localhost:3001/testAPI')
     .then(res => res.text())
     .then(res=>this.setState({
       apiResponse : res
     }))
     .then(()=>{
       //console.log("this response++= "+ this.state.apiResponse)
       if(this.state.apiResponse.search('wait')!=-1){
        let result = this.state.apiResponse.match(new RegExp("wait" + '\\s(\\w+)'))[1];
        let resulttime = this.state.apiResponse.match(new RegExp(result + '\\s(\\w+)'))[1];

        //console.log('result api = '+resulttime)
        // this.setState({
        //   text : 'wait',
        //   showComponent : true
        //  })
         i++;
         showcom[i]=true
         textcom[i]='wait '
         timecom[i]=result+' '+resulttime
       }
        
       if(this.state.apiResponse==='2'){
        //this.setState({text : 'Hardware',showComponent : true})
        i++
        showcom[i]=true
        textcom[i]='Hardware'
        timecom[i]=''
         
       }
        
       if(this.state.apiResponse==='3'){
        //this.setState({text : 'component3',showComponent : true})
        i++
        showcom[i]=true
        textcom[i]='component3'
        timecom[i]=''
        this.setState({showcondition: true})
       }
        
       if(this.state.apiResponse==='4'){
        i++
        showcom[i]=true
        textcom[i]='STOP'
        timecom[i]=''
        this.setState({
         showComponent : false
        })
       
       }
       if(this.state.apiResponse==='5'){
        
        showcom[i]=false
        i--
        
       }
       if(this.state.apiResponse==='6'){
        window.location.reload();
        
       }
      
     })
     .catch(rejected => {
      console.log(rejected);
      });
     
     fetch('http://localhost:3001/testAPI')
     .then(res=>{//console.log(res.status)
      // if(res.status=='200')
      //  i++
      if(textcom[i]!=='STOP')
        this.callAPI()
      // else 
      //   this.setState({showComponent : true})
      //   this.stopRender()
      //  rescode=res.status
    }
    )
    .catch(rejected => {
      console.log(rejected);
      this.setState({
        showComponentfetch : true 
       })
      });
    
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
          {/* {console.log(this.state.speechtext)}
          {console.log(this.state.text)} */}
          {/* <Dictaphone/> */}
          {/* <RecSpeech/> */}
          <div className="row">
            <div className="col-6 offset-6">
              <br/>
              {this.state.showComponent?<Messaging/>:null}
              <br/>
            </div>
          </div>
          
          <Button variant="success" >Start</Button>
          {[...Array(100)].map((e, i) => <RenderNew text={textcom[i]} showComponent={showcom[i]} timecom={timecom[i]} showcondition={this.state.showcondition}/>)}
          {/* <RenderNew text={'stop'} showComponent={this.state.showComponent}/> */}
          
          {/* <RenderNew text={textcom[2]} showComponent={showcom[2]}/>
          <RenderNew text={textcom[3]} showComponent={showcom[3]}/>
          <RenderNew text={textcom[3]} showComponent={showcom[3]}/> */}
          <br/>
          
          {this.state.showComponentfetch?<FlippingSquare/>:null}
          <br/>              
        </div>
      // </DndProvider>
      
    );
  }
}

export default App;