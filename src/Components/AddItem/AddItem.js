import React, { Component } from 'react';
import './AddItem.css';

export class AddItem extends Component {
    state = {
        id : "",
        name : "",
        age : "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value !== "" && e.target.age.value !== ""){
            const newItem = this.state;
            this.props.addItem(newItem);
            this.setState({
                id : "",
                name : "",
                age : "",
            });
        }else{
            window.alert("Please Enter Name & Age !");
        }
    };

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.age} min="0" max="100"/>
                <input type="Submit" value="Add" readOnly/>
            </form>
          </div>
        );
    };
};

export default AddItem;