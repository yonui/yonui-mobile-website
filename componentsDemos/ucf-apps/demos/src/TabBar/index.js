import React, { Component } from "react";
import Demo1 from './demo/Basic'
class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
        <div className='demo-item'><div className='demo-item-title'> 与ListView结合使用</div><Demo1/></div>
        <div className='demo-item'><div className='demo-item-title'> 'Tabbar 在顶部</div><Demo1/></div>
      </div>
    );
  }
}

export default Exmple;