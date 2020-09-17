import React from 'react';
import Content from './layout/content/content';
import Navbar from './layout/header/navbar';
import Leftbar from './layout/leftbar/leftbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Leftbar />
          </div>
          <div className="col-md-9">
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
