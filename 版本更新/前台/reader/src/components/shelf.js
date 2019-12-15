import React from 'react';
import '../App.css';

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
      <div className="shelf-container">
        <div className="recently">
        <div className="detail-title">
          <h2>最新上传</h2>
        </div>
        <div className="shelf">
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
    )
  }





}
