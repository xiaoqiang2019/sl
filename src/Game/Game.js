import React, { Component } from "react"
import "./Game.css"
import SqlRow from "../sqlRow/sqlRow"

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game_mode: [
                {
                    name: "简单",
                    mode: 5
                },
                {
                    name: "一般",
                    mode: 6
                },
                {
                    name: "困难",
                    mode: 7
                },
                {
                    name: "极难",
                    mode: 8
                },
                {
                    name: "噩梦",
                    mode: 9
                },
                {
                    name: "地狱",
                    mode: 10
                }
            ],
            mode: 5,
            grids: [],
            thunder_num: 4,
            thunder: [],
            is_init: false
        }
    };

    componentWillMount() {
        var girds = [];
        var mode = this.state.game_mode[0].mode;
        var thunder_num = Math.floor(mode * mode * 1/6);
        for (var i = 0; i < mode * mode; i++) {
            girds.push(i + 1);
        }

        for (var i = 0; i < (mode * mode) - thunder_num - 1; i++) {
            var thunder_index = Math.floor(Math.random() * (girds.length - 1));
            girds.splice(thunder_index, 1);
        }

        this.setState({
            thunder_num: thunder_num,
            thunder: girds,
            mode: mode
        })
    };

    render() {
        return (
            <div className="game_box">
                <div className="sel_box">
                    <span>游戏难度：</span>
                    <select className="mode_sel" onChange={this.choose_mode}>
                        {this.render_game_mode()}
                    </select>
                </div>

                <SqlRow ref="SqlRow" mode={this.state.mode} thunder={this.state.thunder} is_fail={this.state.is_fail}></SqlRow>
            </div>
        )
    };

    render_game_mode() {
        var mode_list = [];
        for (var i = 0; i < this.state.game_mode.length; i++) {
            var mode = this.state.game_mode[i];
            mode_list.push(<option key={i} value={mode.mode}>{mode.name}({mode.mode}*{mode.mode})</option>)
        }

        return mode_list
    };

    choose_mode = (e) => {
        var girds = [];
        var thunder_num = Math.floor(e.target.value * e.target.value * 1/6);

        for (var i = 0; i < e.target.value * e.target.value; i++) {
            girds.push(i + 1);
        }

        for (var i = 0; i < (e.target.value * e.target.value) - thunder_num; i++) {
            var thunder_index = Math.ceil(Math.random() * (girds.length - 1));
            girds.splice(thunder_index, 1);
        }

        this.setState({
            thunder_num: thunder_num,
            thunder: girds,
            mode: e.target.value
        })

        this.refs.SqlRow.init();
    }
}

export default Game