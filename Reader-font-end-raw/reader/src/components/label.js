import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
export default class Label extends React.Component {
  constructor() {
    super();
    this.state={
      data:[],
      label:"财经"
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9000/getlabel?label=${this.state.label}`,{method:'get'})
      .then(res=>res.json())
      .then((res)=> {
        this.setState({
          data:res
        })
        console.log(res)
      })

  }
  showDetail = (e)=> {
    console.log(e.target.src);
    var idString = e.target.src;
    var id = idString.slice(idString.indexOf('=')+1,idString.lastIndexOf('.'))
    console.log(id);
    this.props.history.push(`/detail/${id}`);
  }

  componentDidUpdate(next,prev) {
    // console.log(prev);
    if(prev.label == this.state.label) {

    }
    else {
      fetch(`http://localhost:9000/getlabel?label=${this.state.label}`,{method:'get'})
        .then(res=>res.json())
        .then((res)=> {
          this.setState({
            data:res
          })
          console.log(res)
        })
    }
    // console.log(this.state);
  }

  render() {
    return (
      <div className = "label-container shelf-container">
        <div className = "recently">
          <div className = "detail-title">
          <ul className="classify">
            {['文学','社科','财经','少儿','科技'].map((item,e)=>(
              <li><a style={{color:'white'}} onClick={()=>{this.setState({label:item})}} className="labels">{item}</a></li>
            ))}
          </ul>

          </div>
          <div className="shelf">
          {
            this.state.data.map((item)=> (
              <div className="book" >
                <img onClick={this.showDetail.bind(this)} src={`http://localhost:9000/getbookslist/image?id=${item.bookId}${item.extName}`}/>
                <p>{item.bookname}</p>
              </div>
            )
          )
          }
          </div>
        </div>
      </div>
    );
  }
}
