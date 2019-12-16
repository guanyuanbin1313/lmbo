import React from 'react';
import '../App.css';


export default class Labelbar extends React.Component {


  render() {
    return (
      <div className="shelf-container">
        <div className="recently">
        <div className="detail-title">
          <h2 style={{marginLeft:'20px',color:'white'}}>标签</h2>
        </div>
        <div className="shelf">
        {
          [1,2,3].map((item)=>(
            <div>{item}</div>
          ))

        }
        </div>
        </div>
      </div>
    )
  }




}
