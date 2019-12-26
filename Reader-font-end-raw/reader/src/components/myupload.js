import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
;

class Myupload extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      data:[1,2,3],
      username:'1234'
    }
  }
  componentDidMount () {
    let username = this.props.match.params.username;
    console.log(username);
    fetch(`http://localhost:9000/my/userList?username=${username}`,{method:'get'})
      .then(res=>res.json())
      .then((res)=> {
        console.log(res);
        this.setState({
          data:res
        })
        console.log(this.state.data);
      })
  }

  render() {
    let usern = this.props.username;
    return (
      <div className="download-container" >
        <div className="detail-title" style={{marginTop:'0'}} ><h2>我上传的</h2></div>
        <div className="my-book">
          {this.state.data.map((item)=>(
            <Link to={`/detail/${item.bookId}`}><a style={{display:'block',marginTop:'10px',fontSize:'20px',paddingLeft:'20px'}}>{item.bookname}</a></Link>
          ))}
        </div>

      </div>
    )
  }
}


export default connect(function(state) {
  return {
    username:state
  }
}) (Myupload);
