import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='gridSetup'>
        
        <div className='box1'></div>
        <div className='box2'> 
        <h1>Using Text Effects:</h1>
        <p className='clip'>clipped: This text will not fit in the box</p>
          <p className='elipsis'>elipsis: This text will not fit in the box</p>
          <p className='wrap'>text effects using word-wrap hereisareallylongword</p>
          
        </div>
        <div className='box3'>
          <p className='keep'>Using text effects like word break (keep-all)</p>
          <p className='break'>Using text effects like word break (break-all)</p>
          <p >Using text effects like writing mode (<span className='vert'>vertical</span>)</p>
        </div>
        <div className='box4'>
        transform

        </div>
        <div className='box5'>
          keyframes
        </div>

        <div className='box6'>
          <button className='button'>Hover</button>
          <input className='focus' placeholder='focus'></input>
          <textarea className='disabled' disabled placeholder='disabled'></textarea>
            <ul className='list'>
                <li>one</li>
                <li>two</li>
                <li>three</li>  
                <li>four</li>
            </ul>
        </div>
      </div>
    )
  }
}
