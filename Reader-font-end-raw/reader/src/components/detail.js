import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data:{},
      commit:'',
      commits:[],
      new:[]
    }
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    fetch(`http://localhost:9000/getdetail?id=${id}`,{method:'get'})
      .then(res=> res.json())
      .then((res)=> {
        this.setState({
          data:res[0]
        })
      })

      fetch('http://localhost:9000/getbookslist',{method:'get'})
      .then((res)=>res.json())
      .then((res)=> {
        this.setState({new:res})
        console.log(res)
      })
    fetch(`http://localhost:9000/commit/get?id=${id}`,{method:'get'})
      .then(res=>res.json())
      .then((res)=> {
        console.log(res);
        this.setState({
          commits:res
        })
      });



  }

  commitChange (e) {
    this.setState({
      commit:e.target.value
    })
  }

  commitSubmit() {
    console.log('test');
    fetch(`http://localhost:9000/commit?bookId=${this.props.match.params.id}&username=${this.props.username}&commit=${this.state.commit}`,{method:'get'});


  }


  render() {
    return (
      <div>
      <div className="detail-container">
        <div className="detail-title">
        <h2>{this.state.data.bookname}</h2>
        </div>
        <img src={`http://localhost:9000/getbookslist/image?id=${this.state.data.bookId}${this.state.data.extName}`}></img>
        <div style={{margin:'0 auto',width:'75vw',textAlign:'left'}}><h3 className="book-detail">{this.state.data.detail}</h3></div>
        <Button type="primary" icon="download" size='large' onClick={()=>{fetch(`http://localhost:9000/markDownload?id=${this.state.data.bookId}&username=${this.props.username}&bookname=${this.state.data.bookname}`,{method:'get'});window.open(this.state.data.shareLink)}}>
        下载图书
        </Button>
        <h3 style={{paddingBottom:'30px'}}>分享密码:{this.state.data.linkSecret}</h3>
      </div>

      <div className="detail-container">
        {this.state.new.map((item)=> (
          <Link to={`/detail/${item.bookId}`} onClick={()=> {this.props.history.push(`/detail/${item.bookId}`);window.location.reload()}} style={{paddingTop:'10px',textAlign:'left'}}>
          <p>{item.bookname}</p></Link>
        ))}
      </div>

      <div className="detail-container" style={{height:'500px'}}>
        <div className="detail-title">
          <h2>发表我的评论</h2>
        </div>

        <form>
          <textarea style={{width:'90%'}}name="commit" onChange={(e)=>this.commitChange(e)}>
          </textarea>
          <button style={{width:'100px',height:'40px',backgroundColor:'#ff5675',border:'none',borderRadius:'10px',color:'white',fontSize:'20px'}} onClick={()=>this.commitSubmit()}>提交</button>
        </form>



        <div className='commit-container' style={{float:'left',marginLeft:'40px'}}>
          {this.state.commits.map((item)=>(
            <div className="commit-container">
              <span style={{fontSize:'15px',fontFamily:'黑体',textAlign:'left'}}>用户{item.username}:</span>
              <div style={{margin:'0 auto',paddingBottom:'10px',width:'200px',height:'30px',borderRadius:'10px',backgroundColor:'#019fde'}}><span style={{color:'white',fontSize:'20px',lineHeight:'30px'}}>{item.detail}</span></div>
            </div>
          ))}
        </div>
      </div>
      </div>

    )
  }

}


export default connect(function(state) {
  return {
    username:state
  }
})(Detail)
