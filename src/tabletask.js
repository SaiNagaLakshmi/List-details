import React, { Component } from 'react'

export default class Tabletask extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <h2 style={{ paddingLeft: "31px" }}>Address</h2>
                    </div>
                    <p style={{ borderStyle: "solid", borderWidth: '0.5px', color: "lightgray" }}></p>
                    <div class="topnav" style={{ marginTop: "-16px" }}>
                        <a >Found:<span>106 Address</span></a>
                        <div class="topnav-right">
                            <a href="#search">Select all</a>
                            <a href="#about">Action with Selected(6)</a>
                            <a><i className="fa fa-caret-down"></i></a>
                        </div>
                    </div>
                    <p style={{ borderStyle: "solid", borderWidth: '0.5px', color: "lightgray" }}></p>
                    <div className="table-responsive desing">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th ><input type="checkbox" /><span>ID</span></th>
                                    <th>Address</th>
                                    <th>Side</th>
                                    <th>Type</th>
                                    <th>Type</th>
                                    <th>Square</th>
                                    <th>Light</th>
                                    <th>Operator/supplier</th>
                                    <th>Control</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /><span>234</span></td>
                                    <td>Anna</td>
                                    <td>Pitt</td>
                                    <td>35</td>
                                    <td>New York</td>
                                    <td>USA</td>
                                    <td>USA</td>
                                    <td>USA</td>
                                    <td><span style={{fontSize:"18px"}}> <i className="fa fa-edit"></i> <i class="fa fa-shopping-cart"></i></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

