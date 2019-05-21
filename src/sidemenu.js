import React, { Component } from 'react';
import Hello from './hello';

export default class Sidemenu extends Component {
  state = {
    isSql: true,
    isEvent: false,
    isAggregation: false,
    isFirst: false,
    isLast: false
  }


  sqlClick = () => {
    this.setState({ isSql: true })
  }
  sqlClick2 = () => {
    this.setState({isEvent: true,isSql: false })
  }
  sqlClick3 = () => {
    this.setState({ isAggregation: true,isSql: false,isEvent: false })
  }
  sqlClick4 = () => {
    this.setState({isFirst: true,isSql: false,isEvent: false,isAggregation: false })
  }
  sqlClick5 = () => {
    this.setState({ isLast: true,isSql: false,isEvent: false,isAggregation: false,isFirst: false })
  }
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: "18px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h1 style={{ textAlign: " center" }}>List Details</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card move" style={{ marginBottom: "8px" }}>
                        <div className="card-body" onClick={this.sqlClick}>
                          <div className="circle" style={{ float: "left", color: "#673ab7" }}><i className="fa fa-usd aggre" aria-hidden="true"></i></div>
                          <div style={{ marginLeft: "75px" }}><b>SQL</b></div>
                          <div style={{ marginLeft: "16%" }}>Create any trait from your data </div>
                        </div>
                      </div>
                      <div className="card move" style={{ marginBottom: "8px" }}>
                        <div className="card-body" onClick={this.sqlClick2}>
                          <div className="circle1" style={{ float: "left" }}><i className="fa fa-bandcamp aggre" aria-hidden="true"></i></div>
                          <div style={{ marginLeft: "75px" }}><b>Event Counter</b></div>
                          <div style={{ marginLeft: "16%" }}>Stores a count of a certain event  over a period of time</div>
                        </div>
                      </div>
                      <div className="card move" style={{ marginBottom: "8px" }}>
                        <div className="card-body" onClick={this.sqlClick3}>
                          <div className="circle2" style={{ float: "left" }}><i className="fa fa-cog aggre" aria-hidden="true"></i></div>
                          <div style={{ marginLeft: "75px" }}><b>Agregation</b></div>
                          <div style={{ marginLeft: "16%" }}>Define a computation that aggregates properties into a  single value</div>
                        </div>
                      </div>
                      <div className="card move" style={{ marginBottom: "8px" }}>
                        <div className="card-body" onClick={this.sqlClick4}>
                          <div className="circle3" style={{ float: "left" }}><i class="fa fa-signal aggre" aria-hidden="true"></i></div>
                          <div style={{ marginLeft: "75px" }}><b>First</b></div>
                          <div style={{ marginLeft: "16%" }}>Property value of first event seen</div>
                        </div>
                      </div>
                      <div className="card move" style={{ marginBottom: "8px" }}>
                        <div className="card-body" onClick={this.sqlClick5}>
                          <div className="circle4" style={{ float: "left" }}><i class="fa fa-leaf aggre" aria-hidden="true"></i></div>
                          <div style={{ marginLeft: "75px" }}><b>Last</b></div>
                          <div style={{ marginLeft: "16%" }}>Property value of last event seen</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {this.state.isSql ? <div className="card ">
                        <a className="circle" style={{ marginLeft: " 45%", color: "#673ab7",marginTop: "9px" }}><i className="fa fa-usd aggre" aria-hidden="true"></i></a>
                        <h4 style={{ textAlign: "center" }}>SQL</h4>
                        <h6 style={{ textAlign: "center" }}>Create any trait from your data </h6>
                        <hr />
                        <Hello />
                      </div> : this.state.isEvent ?<div className="card ">
                        <a className="circle1" style={{ marginLeft: " 45%", color: "#673ab7",marginTop: "9px" }}><i className="fa fa-bandcamp aggre" aria-hidden="true"></i></a>
                        <h4 style={{ textAlign: "center" }}>Event Counter</h4>
                        <h6 style={{ textAlign: "center" }}>Stores a count of a certain event over a period of time</h6>
                        <hr />
                        <Hello />
                      </div>: this.state.isAggregation ?<div className="card ">
                        <a className="circle2" style={{ marginLeft: " 45%", color: "#673ab7",marginTop: "9px" }}><i className="fa fa-cog aggre" aria-hidden="true"></i></a>
                        <h4 style={{ textAlign: "center" }}>Agregation</h4>
                        <h6 style={{ textAlign: "center" }}>Define a computation that aggregates properties into a single value</h6>
                        <hr />
                        <Hello />
                      </div>: this.state.isFirst ?<div className="card ">
                        <a className="circle3" style={{ marginLeft: " 45%", color: "#673ab7",marginTop: "9px" }}><i class="fa fa-signal aggre" aria-hidden="true"></i></a>
                        <h4 style={{ textAlign: "center" }}>First</h4>
                        <h6 style={{ textAlign: "center" }}>Property value of first event seen</h6>
                        <hr />
                        <Hello />
                      </div>: this.state.isLast ?<div className="card ">
                        <a className="circle4" style={{ marginLeft: " 45%", color: "#673ab7",marginTop: "9px" }}><i class="fa fa-leaf aggre" aria-hidden="true"></i></a>
                        <h4 style={{ textAlign: "center" }}>Last</h4>
                        <h6 style={{ textAlign: "center" }}>Property value of last event seen</h6>
                        <hr />
                        <Hello />
                      </div>: null}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}