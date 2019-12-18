import React, {Component} from 'react';
import './css/download.css';
import {Input, Button} from 'antd'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Download extends Component {


    render() {
        return (
            <div style={{height: "95vh", background: "#EAEDED",float:'left'}}>
                <div style={{
                    height: "91vh",
                    background: "#EAEDED",
                    position: "absolute",
                    marginLeft: "15vw",
                    marginTop: "4vh",
                    borderRadius: "15px 15px 7px 7px"
                }}>
                    <div style={{
                        width: "13vw",
                        height: "20vh",
                        backgroundColor: "rgb(239,101,91)",
                        float: "left",
                        marginLeft: "0.4vw",
                        borderRadius: "10px",

                    }}>
                        <h3 style={{
                            display:'block',
                            position: "absolute",
                            paddingLeft:'1vw',
                            lineHeight:'20vh',
                            fontSize: "17px",
                            color: "white",
                            margin:'0 auto'
                        }}>昵称:<Link style={{color:'white'}}>{this.props.username}</Link></h3>
                    </div>
                    <br/>
                    <hr style={{position: "absolute", marginTop: "10vh"}}/>
                    <div style={{
                        width: "13vw",
                        height: "63.7vh",
                        backgroundColor: "rgb(239,101,91)",
                        opacity: 1,
                        position: "absolute",
                        marginTop: "24vh",
                        marginLeft: "0.4vw",
                        height:'400px',
                        borderRadius: '10px'
                    }}>
                        <ul className="my">
                            <li><Link to={`/my/download/${this.props.username}`}><a>已下载的书籍</a></Link></li>
                            <li><Link to={`/my/upload/${this.props.username}`}><a>已上传的书籍</a></Link></li>
                        </ul>
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
})(Download);
