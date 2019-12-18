import React from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
/** */
export default function() {
  return(
    <div>
      <form action="http://localhost:9000/upload" method='POST' encType="multipart/form-data">
        <input type="file" name="coverPic"></input>
        <input type="text" name="username"></input> 
        <input type="submit" value="上传"/>
      </form>
      <form action="http://localhost:9000/upload" method='POST' style={{width:"100%",height:"80vw",backgroundColor:'rgb(237,237,237)'}}>
        <div style={{width:"100%",height:"3vw",backgroundColor:'#fff'}}>
          <p style={{marginLeft:'3vw',marginTop:'1vw',color:'rgb(102,102,102)'}}>
            <img style={{width:'2vw'}} src="./img/home.png"></img>
            <Link style={{marginLeft:'1vw',fontSize:'1.2vw',color:'rgb(102,102,102)'}}>首页</Link>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
            <Link style={{fontSize:'1.2vw',color:'rgb(102,102,102)'}}>中文书籍</Link>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
            <Link style={{fontSize:'1.2vw',color:'rgb(102,102,102)'}}>正文</Link></p>
        </div>
        <div style={{margin:"0 auto",width:"95%",marginTop:'2vw',height:"50vw",backgroundColor:'#fff'}}>
          <div style={{float:'left',width:"100%",height:"8vw",backgroundColor:'rgb(248,248,248)'}}>
            <p style={{float:'left',fontSize:'1.9vw',fontWeight:'600',marginTop:'1vw',marginLeft:'1vw',color:'rgb(102,102,102)'}}>分享书籍</p>
          </div>
          <div style={{height:"70vw",width:'100%',backgroundColor:'#fff'}}>
            <input name="bookname" type="text" placeholder=" 书籍名称：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'1vw',width:'40vw',height:"4vw"}}>
            </input>
            <br></br>
            <input name="shareLink" type="text" placeholder=" 请输入分享链接：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"4vw"}}>
            </input>
            <br></br>
            <input name="Linksecret" type="password" placeholder=" 请输入链接密码：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"4vw"}}>
            </input>
            <br></br>
            <input name="Linksecret" type="text" placeholder=" 书的简介：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'5vw',width:'40vw',height:"4vw"}}>
            </input>
            <br></br>
            <p style={{marginTop:'2vw',marginLeft:'2vw'}}>上传封面</p><input name="Linksecret" type="file" placeholder=" 书的简介：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'1vw',width:'40vw',height:"4vw"}}>
            </input>
            <br></br>
            <input style={{border:"none",marginTop:'1vw',width:'40vw',borderRadius:'1vw',height:'4vw',marginLeft:"2vw",}} type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  )
}
