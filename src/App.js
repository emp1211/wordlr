import React from 'react';
// import './reset.css';
import './index.css';
import Header from './Header';
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';
import RowSix from './RowSix';
import Keyboard from './Keyboard';

function App() {
  
   return (
    <div className="App">
      <Header />
           < RowOne />
           < RowTwo />
           < RowThree />
           < RowFour />
           < RowFive />
           < RowSix /> 
          < Keyboard />
    </div>
  );
}

export default App;
