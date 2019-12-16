import React from 'react';
import '../App.css';
import { Button } from 'antd';
export default class Shelf extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      new:[1,2],
    }
  }
  showDetail = (e)=> {
    console.log(e.target.src);
    var idString = e.target.src;
    var id = idString.slice(idString.indexOf('=')+1,idString.lastIndexOf('.'))
    console.log(id);
    this.props.history.push(`/detail/${id}`);
  }
  componentDidMount() {
    fetch('http://localhost:9000/getbookslist',{method:'get'})
    .then((res)=>res.json())
    .then((res)=> {
      this.setState({new:res})
      console.log(res)
    })
  }

  render() {
    return(
      <div style={{width:'90vw',margin:'0 auto'}}>
      <div className="shelf-container" style={{width:'65vw',float:'left'}}>
        <div className="recently" style={{width:'65vw'}}>
        <div className="detail-title" style={{width:'65vw'}}>
          <h2 style={{marginLeft:'20px',color:'white'}}>最新上传</h2>
        </div>
        <div className="shelf" style={{width:'60vw'}}>
        {
          this.state.new.map((item)=> (
            <div className="book" >
              <img onClick={this.showDetail.bind(this)} src={`http://localhost:9000/getbookslist/image?id=${item.bookId}${item.extName}`}/>
              <p>{item.bookName}</p>
            </div>
          )
        )
        }
        </div>
        </div>
      </div>

      <div className="shelf-container" style={{width:'20vw',float:'right'}}>
        <div className="recently" style={{width:'20vw'}}>
        <div className="detail-title">
          <h2 style={{marginLeft:'20px',color:'white'}}>标签</h2>
        </div>
        <div className="shelf" style={{width:'20vw',height:'300px'}}>
        {
          ['文学','社科','财经','少儿','科技'].map((item)=>(
            <Button style={{width:'15vw',margin:'0 auto'}} type="primary">{item}</Button>
          ))

        }
        </div>
        </div>
      </div>

      </div>
    )
  }





}
