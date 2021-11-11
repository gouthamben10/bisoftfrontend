import React, { Component } from 'react';
import {Recorder} from 'react-voice-recorder'
import axios from 'axios'
import 'react-voice-recorder/dist/index.css'
class RecSpeech extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audioDetails: {
                url: null,
                blob: null,
                chunks: null,
                duration: {
                  h: 0,
                  m: 0,
                  s: 0
                }
              }
        }
    }
    handleAudioStop(data){
        console.log(data)
        this.setState({ audioDetails: data });
    }
    handleAudioUpload(file) {
      // console.log(file);
      // const str2blob = txt => new Blob([txt],{type:'audio/webm'});
      // console.log(str2blob(this.state.audioDetails.blob));
       let urlsrc= URL.createObjectURL(this.state.audioDetails.blob)
      console.log('urlsrc= '+urlsrc)
        fetch('http://localhost:3001/speechAPI',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify(this.state.audioDetails)
            
        })
        .then(()=>{
            console.log("new added")
        })    
      // axios.post('http://localhost:3001/speechAPI',this.state.audioDetails.url)
      // .then(response => {console.log(response)})
      // .catch(err => {console.log(err)});

    }
    handleReset() {
        const reset = {
          url: null,
          blob: null,
          chunks: null,
          duration: {
            h: 0,
            m: 0,
            s: 0
          }
        };
        this.setState({ audioDetails: reset });
      }
    render() {
        return (
            <Recorder
                record={true}
                title={"New recording"}
                audioURL={this.state.audioDetails.url}
                showUIAudio
                handleAudioStop={data => this.handleAudioStop(data)}
                handleAudioUpload={data => this.handleAudioUpload(data)}
                handleReset={() => this.handleReset()}
                mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
            />
        );
    }
}

export default RecSpeech;