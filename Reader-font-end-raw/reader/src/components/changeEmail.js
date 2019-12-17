import React, {Component} from 'react';
import '../download.css';
import {Input, Button} from 'antd'

export default class Download extends Component {
    render() {
        return (
            <div style={{height: "95vh", background: "#EAEDED"}}>
                <div style={{
                    height: "91vh",
                    width: "70vw",
                    background: "#EAEDED",
                    position: "absolute",
                    marginLeft: "15vw",
                    marginTop: "4vh",
                    borderRadius: "15px 15px 7px 7px"
                }}>
                    <div style={{
                        width: "13vw",
                        height: "22vh",
                        backgroundColor: "rgb(239,101,91)",
                        float: "left",
                        marginLeft: "0.4vw",
                        borderRadius: "15px 15px 7px 7px"
                    }}>
                        <h3 style={{
                            position: "absolute",
                            marginTop: "6vh",
                            marginLeft: "4vw",
                            fontSize: "17px",
                            color: "white"
                        }}>昵称:abb</h3>
                        <hr style={{
                            width: "8vw",
                            height: "0.1vh",
                            marginLeft: "2.2vw",
                            marginTop: "10vh",
                            backgroundColor: "white",
                            border: "white"
                        }}/>
                        <span style={{marginLeft: "5vw", color: "white"}}>积分:0</span>
                    </div>
                    <div class="head" style={{
                        height: "6vh",
                        width: "56vw",
                        backgroundColor: "rgb(239,101,91)",
                        marginLeft: "0.5vw",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px"
                    }}>
                        <span class="headtext">个人资料</span>
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
                        borderRadius: "10px 10px 7px 7px"
                    }}>
                        <ul>
                            <li><a>已下载的书籍</a></li>
                            <li><a>已上传的书籍</a></li>
                        </ul>
                    </div>
                    <div class="main">
                        <p class="nav"><a>个人资料</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a>修改头像</a>&nbsp;&nbsp;
                            |&nbsp;&nbsp;<a>修改邮箱</a></p>
                        <p style={{
                            color: "#3498DB",
                            position: "absolute",
                            marginTop: "10.5vh",
                            marginLeft: "5vw",
                            letterSpacing: "10px"
                        }}>
                            邮箱:</p>
                        <form method="post" style={{position: "absolute", marginTop: "10vh", marginLeft: "8.5vw"}}>
                            <Input type="text" placeholder="请输入新的邮箱:" style={{width: "15vw"}}></Input><br/>
                            <Input type="submit" value="点击修改" style={{width: "6vw", marginTop: "1vh"}}></Input>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}