import React from 'react';
import { Button, Layout, Carousel } from 'antd';
import './App.css';

function onChange(a, b, c) {
  console.log(a, b, c);
}

function App() {
  return (
    <div className="App">
      <Carousel afterChange={onChange}>
        <div>
          <Button type="primary">颜色显示正常</Button>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>,
    </div>
  );
}

export default App;
