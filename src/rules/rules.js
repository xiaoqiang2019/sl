import React, { Component } from "react" 

class Rules extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <ul>
                <li>胜利条件：找出所有炸弹</li>
                <li>鼠标左键为点击方块，鼠标右键为标记方块为炸弹</li>
                <li>当点击一个炸弹或者标记出所有炸弹游戏结束</li>
                <li>简单:5个炸弹</li>
                <li>一般:6个炸弹</li>
                <li>困难:8个炸弹</li>
                <li>极难:10个炸弹</li>
                <li>噩梦:13个炸弹</li>
                <li>地狱:16个炸弹</li>
            </ul>
        )
    }
}

export default Rules