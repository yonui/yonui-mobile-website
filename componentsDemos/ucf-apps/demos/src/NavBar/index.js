import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'



class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基本示例</div><Demo1/></div>
      </div>
    );
  }
}

export default Exmple;