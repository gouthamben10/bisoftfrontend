
import { HTML5Backend } from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd'
import DragDrop from './components/DragDrop'
import './App.css';


import Main from './components/Main';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
       {/* <DragDrop/> */}
        <Main/>
      </div>
    </DndProvider>
    
  );
}

export default App;
