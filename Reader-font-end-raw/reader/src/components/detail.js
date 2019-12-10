import React from 'react';


export default class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data:{}
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
  }
  render() {
    return (
      <div className="detail-container">
        <div className="detail-title">
        <h2>{this.state.data.bookname}</h2>
        </div>
        <img src={`http://localhost:9000/getbookslist/image?id=${this.state.data.bookId}${this.state.data.extName}`}></img>
        <h3 className="book-detail">{this.state.data.detail}</h3>
      </div>
    )
  }

}
