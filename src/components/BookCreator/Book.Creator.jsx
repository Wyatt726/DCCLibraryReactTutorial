import React, { Component } from 'react';

class BookCreator extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            author:''
         }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewBook(this.state)
    }
    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Book Name</label>
                <input name="name" onChange={this.state.title} value={this.state.name}/>
                <label>Author</label>
                <input name="author" onChange={this.state.author} value={this.state.name} />
                <button type="submit">Create Book</button>
            </form>
         );
    }
}
 
export default BookCreator;