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

        const disablePopover = () => {
            let btn = document.getElementById(this.state.count);
            
            //console.log(this.state.count)
            btn.disabled = true;
            //this.state.disabled =!this.state.disabled;
            
            btn.innerText = "start"
            //this.state.text="harware"
            
            //console.log(this.state.text)
            let btnmenu = document.getElementById('popover-basic')
           // btn.setAttribute('placement',"right")
            btnmenu.style['display']='none'
            console.log('hi')
           
            
        }
       
          
        const popover = (
            <Popover id="popover-basic">
              {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
              <Popover.Body>
              <ButtonGroup vertical>
                    <Button onClick={disablePopover}>Hardware</Button>
                    <Button>Condition</Button>
                    <Button>repeat</Button>
                    <Button>stop</Button>
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
              <Button id={this.state.count} variant="success" >ADD</Button>
            </OverlayTrigger>
            
          );
        return (
            <div className="container">
              
                    <Example/>
                    {console.log(this.state.showComponent)}
            
                    <RenderNew text={this.state.text} disabled={this.state.disabled}/>
                    
                
            </div>
          
          );
    }
}

export default Main;