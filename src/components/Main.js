import React, { Component } from 'react';
import RenderNew from './RenderNew'
import {Popover,OverlayTrigger,Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : 'start',
            disabled : false,
            count: 0,
            
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
        this.setState({
          showComponent: true,
        })
      }
    render() {

        const disablePopover1 = () => {
            let btn = document.getElementById(this.state.count);
            //git add start
            //console.log(this.state.count)
            //btn.disabled = true;
            //this.state.disabled =!this.state.disabled;
            
            //btn.innerText = "start"
            //this.state.text="harware"
            
            //console.log(this.state.text)
             let btnmenu = document.getElementById('popover-basic')
           // btn.setAttribute('placement',"right")
            btnmenu.style['display']='none'
           
           
                this.setState({
                    showComponent: true,
                    text: 'hardware'
                })
      
            
        }
        const disablePopover2 = () => {
            let btn = document.getElementById(this.state.count);
            //git add start
            //console.log(this.state.count)
            //btn.disabled = true;
            //this.state.disabled =!this.state.disabled;
            
            //btn.innerText = "start"
            //this.state.text="harware"
            
            //console.log(this.state.text)
             let btnmenu = document.getElementById('popover-basic')
           // btn.setAttribute('placement',"right")
            btnmenu.style['display']='none'
           
           
                this.setState({
                    showComponent: true,
                    text: 'condition'
                })
      
            
        }
        const disablePopover3 = () => {
            let btn = document.getElementById(this.state.count);
            //git add start
            //console.log(this.state.count)
            //btn.disabled = true;
            //this.state.disabled =!this.state.disabled;
            
            //btn.innerText = "start"
            //this.state.text="harware"
            
            //console.log(this.state.text)
             let btnmenu = document.getElementById('popover-basic')
           // btn.setAttribute('placement',"right")
            btnmenu.style['display']='none'
           
           
                this.setState({
                    showComponent: true,
                    text: 'repeat'
                })
      
            
        }
        const disablePopover4 = () => {
            let btn = document.getElementById(this.state.count);
            //git add start
            //console.log(this.state.count)
            btn.disabled = true;
            //this.state.disabled =!this.state.disabled;
            
            //btn.innerText = "start"
            //this.state.text="harware"
            
            //console.log(this.state.text)
             let btnmenu = document.getElementById('popover-basic')
         
           btnmenu.style['display']='none'
           
           
                this.setState({
                    showComponent: true,
                    text: 'stop'
                })
      
            
        }
       
          
        const popover = (
            <Popover id="popover-basic">
              {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
              <Popover.Body>
              <ButtonGroup vertical>
                    <Button onClick={disablePopover1} id='btn-0' className='hard'>Hardware</Button>
                    <Button onClick={disablePopover2} id='btn-1' className='con'>Condition</Button>
                    <Button onClick={disablePopover3} id='btn-2' className='rep'>repeat</Button>
                    <Button onClick={disablePopover4} id='btn-3' className='stop'>stop</Button>
                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
              </Popover.Body>
            </Popover>
          );
      
          
          const Example = () => (
            
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover} >
              
              <Button id={this.state.count} variant="success" >Start</Button>
            </OverlayTrigger>
            
          );
        return (
            <div className="container">
              
                    <Example/>
                    {console.log(this.state.text)}
            
                    <RenderNew text={this.state.text} showComponent={this.state.showComponent}/>
                    
                
            </div>
          
          );
    }
}

export default Main;