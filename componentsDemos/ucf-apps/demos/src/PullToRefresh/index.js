import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'



class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'></div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'></div><Demo2/></div>
      </div>
    );
  }
}

export default Exmple;