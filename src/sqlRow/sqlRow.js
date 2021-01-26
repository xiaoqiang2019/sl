import React, { Component } from 'react'
import SqlCol from "../sqlCol/sqlCol";
import "./sqlRow.css"

class sqlRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_fail: false,
            gird_clicked_obj: []
        }
    }
    componentDidMount() {

    };

    render() {
        var row = [];

        for (var i = 0; i < this.props.mode * this.props.mode; i += this.props.mode * 1) {
            var col = [];
            for (var j = i; j < i * 1 + this.props.mode * 1; j++) {
                col.push(this.render_sql_col(j));
            }

            row.push(<div key={i} className="col_box">{col}</div>);
        }

        return (
            <div className="row_spl" style={{ width: this.props.mode * 52 + "px" }}>
                {row}
            </div>
        );
    }

    render_sql_col(index) {
        return (
            <SqlCol key={index} index={index + 1} onChange={() => { this.handleClick(index * 1 + 1) }} thunder={this.props.thunder} is_fail={this.state.is_fail} gird_clicked_obj={this.state.gird_clicked_obj}></SqlCol>
        )
    }

    init() {
        sessionStorage.removeItem("thunder_tip");
        this.setState({
            is_fail: false,
            gird_clicked_obj: []
        })
    }

    handleClick(index) {
        if (this.state.is_fail) {
            return;
        }
        var text = 0;
        var gird_clicked_obj = this.state.gird_clicked_obj;

        if ((!gird_clicked_obj.indexOf[index]) && (this.props.thunder.indexOf(index) === -1)) {
            if (this.props.thunder.indexOf(index + this.props.mode) !== -1) {
                text++;
            }

            if (this.props.thunder.indexOf(index - this.props.mode) !== -1) {
                text++;
            }

            if (this.props.thunder.indexOf(index + 1) !== -1) {
                text++;
            }

            if (this.props.thunder.indexOf(index - 1) !== -1) {
                text++;
            }

            Object.assign(gird_clicked_obj, JSON.parse(`{"${index}":"${text}"}`));
        }

        this.setState({
            gird_clicked_obj: gird_clicked_obj
        })

        if (this.props.thunder.indexOf(index) !== - 1) {
            this.setState({
                is_fail: true
            }, () => {
                alert("你输了")
            })
        }
    }
}

export default sqlRow