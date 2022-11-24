import React, { Component, createElement } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ulStyle = {
            listStyle: "none",
            margin: "0px",
            padding: "0px",
            width: "auto"
        };
        let liStyle = {
            float: 'left',
            marginLeft: '20px'
        };
        return (
            <p>
                <Router>
                    <div>
                        <ul style={ulStyle}>
                            <li style={liStyle}>
                                <span style={{ fontWeight: 'bold' }}><a href="https://github.com/StephenChou1017/react-big-scheduler" target="_blank">React Big Scheduler</a></span>
                            </li>
                            <li style={liStyle}>
                                <Link target="_self"
                                    to='./'>
                                    <span>Basic</span>
                                </Link>
                            </li>
                            <li style={liStyle}>
                                <Link target="_self"
                                    to='./CellUnits'>
                                    <span>Cell units</span>
                                </Link>
                            </li>
                        </ul>
                        <div style={{ clear: "both", marginBottom: '24px' }}></div>
                    </div>
                </Router>
            </p>
        )
    }
}

export default Nav
