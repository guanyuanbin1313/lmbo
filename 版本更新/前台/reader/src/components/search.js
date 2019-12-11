import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
export default class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      data:[]
    }
  }


  componentDidMount() {
    console.log(this.props.match.params.id);
    fetch(`http://localhost:9000/search?bookname=${this.props.match.params.id}`,{method:'get'})
      .then((res)=>res.json())
      .then((res)=> {
        this.setState({
          data:res
          })
          console.log(this.state.data);
        })
  }


    componentDidUpdate(prevProps,prevState) {
      if(prevProps == this.props) {

      }
      else {
        // console.log(this.props.match.params.id);
        // console.log(prevProps,prevState,"test");
        fetch(`http://localhost:9000/search?bookname=${this.props.match.params.id}`,{method:'get'})
          .then((res)=>res.json())
          .then((res)=> {
            this.setState({
              data:res
              })
              console.log(this.state.data);
            })
            // return false;

      }
    }

  render() {
    return(
      <div className="shelf-container">
        <div className="recently">
          <div className="detail-title">
            <h2>搜索结果</h2>
          </div>
          <div>
            {
              this.state.data.map((item)=>(
                <Link to={`/detail/${item.bookId}`}>
                <div className="booklist">
                  <div className="booklist-cover">
                      <img src={`http://localhost:9000/getbookslist/image?id=${item.bookId}${item.extName}`}></img>
                  </div>
                  <div>
                    <h2>{item.bookname}</h2>

                  </div>
                </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

}
