import React from 'react';
import '../App.css';

export default class literary extends React.Component {
  constructor() {
    super();
    this.state={
      data:[],
      label:"财经",
      sub:['文学','社科','财经','少儿','科技']
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
  }

  render() {
    return (
      <div className = "label-container shelf-container">
        <div className = "recently">
          <div className = "detail-title">
          <ul className="classify">{
            console.log(this.props.location.state.idx)
          }
            {[this.state.sub[this.props.location.state.idx]].map((item,e)=>(
              <li><b style={{color:'white',marginLeft:'-40vw',float:"left",width:"50px"}} onClick={()=>{this.setState({label:item})}}
               className="literary">{item}</b></li>
            ))}
          </ul>

          </div>
          <div className="shelf">
          {
            [this.props.location.state.item].map((item)=> (
              <div className="book" >
                {
                  console.log(item)
                }
                <img onClick={this.showDetail.bind(this)} 
                src={`http://localhost:9000/getbookslist/image?id=${item.bookId}${item.extName}`}/>
                
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
