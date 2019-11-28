import React from 'react';

export default function() {
  return(
    <div>
      <form action="http://localhost:9000/upload" method='POST' encType="multipart/form-data">
        <input type="file" name="coverPic"></input>
        <input type="text" name="username"></input> 
        <input type="submit" value="上传"/>
      </form>
    </div>
  )
}
