import React from 'react';

export default function LinkSecret() {
  return(
    <div>
        <form action="#" method="post" style={{margin:"0 auto",borderRadius:'2vw',marginTop:'10vw',width:'45%',height:'25vw',backgroundColor:'rgb(204,204,204)'}}>
            <input name="shareLink" type="password" placeholder=" 请输入链接密码：" style={{outline:'none',borderRadius:'1vw',marginLeft:"2vw",marginTop:'10vw',width:'40vw',height:"4vw"}}>
            </input>
            <input style={{marginTop:'1vw',width:'30vw',borderRadius:'1vw',height:'4vw',marginLeft:"6vw",}} type="submit"></input>
        </form>
    </div>
  )
}
