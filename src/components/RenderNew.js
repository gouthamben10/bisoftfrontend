import React, { Component } from 'react';
import {Popover,OverlayTrigger,Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'
import Main from './Main';
class RenderNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
        text : 'start',
        showComponent: false,
    }
  }
  render() {
    const disablePopover1 = ()=>{
      let btnmenu = document.getElementById('popover-basic')
      // btn.setAttribute('placement',"right")
       btnmenu.style['display']='none'
       this.setState({
        showComponent: true,
        text: 'hardware'
       })
       
    
    }
    const popover = (
      <Popover id="popover-basic">
        {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
        <Popover.Body>
        <ButtonGroup vertical>
              <Button className='hard' onClick={disablePopover1} >Hardware</Button>
              <Button  className='con'>Condition</Button>
              <Button className='rep'>repeat</Button>
              <Button  className='stop'>stop</Button>
            
          </ButtonGroup>
        </Popover.Body>
      </Popover>
    );
     const Example = () => (
              
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover} >
        <Button variant="success" >{this.props.text}{this.props.timecom}</Button>
      </OverlayTrigger>
      
    ); 
  
    return (
    <div>
       {this.props.showComponent?<div><div>|<br/>|<br/>|<br/>V<br/></div><Example/></div>:null}
      
    </div>
     //this.props.showcondition?<div>-<br/>-<br/>-<br/><Button variant="success" >yes</Button>|<br/>|<br/>|<br/><Button variant="success" >no</Button></div>:null
      //<h1>fomponent</h1>
  
      
   
    )
  }
}

export default RenderNew;