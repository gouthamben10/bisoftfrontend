import React from 'react';
import Board from './Board';
import Card from './Card';

function DragDrop(props) {
    return (
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id ="card-2" className="card" draggable="true">
              <p></p>
            </Card>
            <Card id ="card-3" className="card" draggable="true">
              <p>card 3</p>
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id ="card-1" className="card" draggable="false">
              <p>start </p>
            </Card>
          </Board>
          </main>
    );
}

export default DragDrop;