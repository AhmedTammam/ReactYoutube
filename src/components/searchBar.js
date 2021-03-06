import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                placeholder="   search for any video"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
            </div>
            
        );
    }
}

export default SearchBar;