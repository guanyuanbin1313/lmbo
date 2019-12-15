import React from 'react';

export default function() {
  return(
    <div>
      <form action="http://localhost:9000/upload" method='POST' encType="multipart/form-data">
        <input type="file" name="coverPic"></input>
        <br/>
        <input type="pwd" name="bookname" placeholder="书名"></input>
        <br/>
        <input type="text" name="shareLink" placeholder="分享链接"/>
        <br/>
        <input type="text" name="linkSecret" placeholder="分享密码"/>
        <br/>
        <input type="text" name="detail" placeholder="图书详情" />
        <br/>
        <input type="submit" value="上传"/>
      </form>
    </div>
  )
}
