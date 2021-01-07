import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {

    render() {
        return (
            <div className="searchBar">
                <form className="search-form" onSubmit={e => this.props.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" placeholder="Start here" onChange={e => this.props.handleSearch(e.target.value)}></input>
                    <button type="submit" name="search">Go</button>
                </form>
            </div>
        )
    }
}
