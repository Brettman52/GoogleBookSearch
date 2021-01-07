import React, { Component } from "react";
import "./Booklist.css";
import Book from "./Book";

export default class BookList extends Component {
  displayByBookType() {
    let displayByBookType = this.props.bookData
      .filter(
        (book) =>
          (this.props.bookType === "ALL" ||
            (book.saleInfo.saleability === this.props.saleability &&
              book.saleInfo.isEbook === this.props.isEbook) ||
            book.accessInfo.viewability === this.props.bookType) &&
          (this.props.printType === "ALL" ||
            book.volumeInfo.printType === this.props.printType)
      )
      .map((book, i) => <Book {...book} key={i} />);

      if(displayByBookType.length === 0){
          return(
              <div id="emptyMessage">Nothing to see here...<br />
              Try readjusting your filters
              </div>
          )
      } else{

    return displayByBookType;
      }
  }
  
  render() {
    const books = this.displayByBookType();

    return <div>{books}</div>;
  }
}
BookList.defaultProps = {
  books: [],
};
