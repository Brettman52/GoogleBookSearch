import React, { Component } from "react";
import "./Booklist.css";
import Book from "./Book";

export default class BookList extends Component {

  static defaultProps = {
    books: []
  }

  displayByBookType() {

    const {
      bookData,
      bookType,
      isEbook,
      saleability,
      printType
    } = this.props

    return bookData.filter(({ saleInfo, accessInfo, volumeInfo}) =>{
      if(bookType === 'ALL') return true
      if(saleInfo.saleability === saleability && saleInfo.isEbook === isEbook) return true
      return (accessInfo.viewability === bookType && (printType === 'ALL' || volumeInfo.printType === printType))
    })
    .map((book, i) => <Book {...book} key={i} />);
  }

  render() {
    const books = this.displayByBookType()

    if(books.length === 0 ) return (
      <div id="emptyMessage">Nothing to see here...<br />
        Try readjusting your filters
      </div>
    )

    return <div>{books}</div>;
  }
}
