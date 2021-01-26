import React, { Component } from 'react';
import "./sqlCol.css";

class SqlCol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        document.oncontextmenu = function () {
            return false;
        }

        var girds_spans = document.getElementsByClassName("col_spl_item");
        for(var i= 0;i<girds_spans.length;i++){
            var girds_span = girds_spans[i];
            girds_span.style.backgroundColor = "";
        }

        sessionStorage.removeItem("thunder_tip");
    }

    render() {
        return (
            <div className="col_spl" onClick={this.grid_click} index={this.props.index} style={{ backgroundColor: this.is_gird(this.props.index) }} onMouseDown={this.right_click}>
                <span className="col_spl_item" index={this.props.index}>{this.props.gird_clicked_obj[this.props.index]}</span>
            </div>
        )
    }

    is_gird(index) {
        if ((this.props.thunder.indexOf(index) !== -1) && this.props.is_fail) {
            return 'red'
        } else {
            if (this.props.gird_clicked_obj[index]) {
                console.log(this.props.thunder);
                return 'rgba(0,0,0,0.1)'
            }

            return ''
        }
    }

    right_click = (e) => {
        if (e.button === 2) {
            if(!sessionStorage.thunder_tip){
                var thunder_tip = [];
            }else{
                var thunder_tip = JSON.parse(sessionStorage.thunder_tip);
            }

            var curren_item_index = e.target.attributes.index.nodeValue;
            e.target.style.backgroundColor = "yellow";
            if (thunder_tip.indexOf(curren_item_index*1) === -1) {
                thunder_tip.push(curren_item_index*1);
                sessionStorage.setItem("thunder_tip",JSON.stringify(thunder_tip));
            }else{
                thunder_tip.splice(thunder_tip.indexOf(curren_item_index),1);
                sessionStorage.setItem("thunder_tip",JSON.stringify(thunder_tip));
                e.target.style.backgroundColor = "";
            }
            
            if (thunder_tip.sort(this.sort).toString() === this.props.thunder.toString()) {
                e.target.style.backgroundColor = "yellow";
                alert("YOU WIN");
            }
        }
    }

    sort(a,b){
        return a-b;
    }

    grid_click = () => {
        this.props.onChange();
    }
}

export default SqlCol