import React from 'react';

export default function() {
  return(
    <div>
      <form action="/upload" method='POST' encType="multipart/form-data">
        <input type="txt" name="coverPic"></input>
        <input type="submit" value="上传"/>
      </form>
    </div>
  )
}
