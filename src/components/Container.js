import React, { Component } from "react";
import { connect } from "react-redux";
import {
  testCase1,
  testCaseAdd,
  testCaseDelete,
} from "../actions/actionTemplate";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: {
        id: 3,
        name: "Alex",
        age: "Iceland",
      },
      id: 1,
    };
  }

  handleClick = (e) => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        this.props.testCase1(this.state.count);
      }
    );
  };

  handleDelete = (e) => {
    this.props.testCaseDelete(this.state.id);
    this.setState({
      obj: this.props.tempSomeArray,
    });
  };

  render() {
    return (
      <>
        <h1>count:</h1> <h3>{this.props.tempCount}</h3>
        someArray:
        <ul>
          {this.props.tempSomeArray.map((item, index) => {
            return <li key={index}>[item.name} | {item.age}</li>;
          })}
        </ul>
        update count:
        <button onClick={this.handleClick}>
          {/* <button onClick={() => this.props.testCase1(this.state.count)}> */}
          Update Count
        </button>
        update testCaseAdd
        <button onClick={() => this.props.testCaseAdd(this.state.obj)}>
          Update testCaseAdd
        </button>
        delete item
        <button onClick={this.handleDelete}>
          {/* <button onClick={() => this.props.testCaseDelete(this.state.id)}> */}
          Update testCaseDelete
        </button>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tempCount: state.template.count,
    tempSomeArray: state.template.someArray,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    testCase1: (countValue) => dispatch(testCase1(countValue)),
    testCaseAdd: (dataObj) => dispatch(testCaseAdd(dataObj)),
    testCaseDelete: (id) => dispatch(testCaseDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
