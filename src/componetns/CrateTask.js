import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo";

class CrateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (ev) => {
    const { value } = ev.target;
    this.setState({ value })
  }
  addTodo = () => {
    const { value } = this.state;

    this.props.addTodo(value);
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    return (
      <div >
        <input value={value} onChange={this.handleChange} type="text" placeholder="description" />
        <button  onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  addTodo
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrateTask)

export default Container;
