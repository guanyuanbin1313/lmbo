import React from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'

export default function() {
  return(
    <div>
      <form action="http://localhost:9000/upload" encType="multipart/form-data" method='post' style={{width:"100%",height:"80vw",backgroundColor:'rgb(237,237,237)'}}>
        <div style={{margin:"0 auto",width:"95%",marginTop:'2vw',height:"50vw",backgroundColor:'#fff'}}>
          <div style={{float:'left',width:"100%",height:"8vw",backgroundColor:'rgb(248,248,248)'}}>
            <p style={{float:'left',fontSize:'1.9vw',fontWeight:'600',marginTop:'1vw',marginLeft:'1vw',color:'rgb(102,102,102)'}}>分享书籍</p>
          </div>
          <div style={{height:"80vw",width:'100%',backgroundColor:'#fff'}}>
            <input name="bookname" type="text" placeholder=" 书籍名称：" style={{border:'1px solid #0080ff',outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'1vw',width:'40vw',height:"6vw"}}>
            </input>
            <br></br>
            <input name="shareLink" type="text" placeholder=" 请输入分享链接：" style={{border:'1px solid #0080ff',outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"6vw"}}>
            </input>
            <br></br>
            <input name="linkSecret" type="password" placeholder=" 请输入链接密码：" style={{border:'1px solid #0080ff',outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"6vw"}}>
            </input>
            <br></br>
            <input name="detail" type="text" placeholder=" 书的简介：" style={{border:'1px solid #0080ff',outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"6vw"}}>
            </input>
            <br></br>
            <p style={{marginTop:'2vw',marginLeft:'2vw'}}>上传封面</p><input name="coverPic" type="file" placeholder=" 书的简介：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'1vw',width:'40vw',height:"6vw"}}>
            </input>
            <br></br>
            <input style={{backgroundColor:'#0080ff',color:'white',border:'none',marginTop:'1vw',width:'40vw',borderRadius:'1vw',height:'6vw',marginLeft:"2vw",}} type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  )
}
