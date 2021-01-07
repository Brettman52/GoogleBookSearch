import React, { Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  render() {
    return (
      <div className="filterContainer">
        <label htmlFor="print type">Print Type:</label>
        <select
          placeholder="all"
          name="print type"
          onChange={(e) => this.props.handlePrintTypeFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="MAGAZINE">Magazine</option>
          <option value="BOOK">Book</option>
        </select>
        <label htmlFor="book type">Book Type:</label>
        <select
          id="bookTypeFilter"
          onChange={(e) => this.props.handleBookTypeFilter(e.target.value)}
          name="book type"
        >
          <option value="ALL">All</option>
          <option value="PARTIAL">Partial</option>
          <option value="ALL_PAGES">Full</option>
          <option value="FREE_EBOOK">Free-ebook</option>
        </select>
      </div>
    );
  }
}