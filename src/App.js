import React, { Component } from "react";
import "./App.css";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

export class App extends Component {

  state = {
    search: "",
    books: [],
    printType: "ALL",
    bookType: "ALL",
    hasSubmitted: false,
    isEbook: "",
    saleability: "",
    failedSearchHold:""
  };

  handleBookTypeFilter = (bookType) => {
    if (bookType === "FREE_EBOOK") {
      this.setState({
        bookType,
        isEbook: true,
        saleability: "FREE",
      });
    } else {
      this.setState({
        bookType,
        isEbook: "",
        saleability: "",
      });
    }
  };

  handleSearch = (search) => {
    this.setState({
      search,
    });
  };

  handlePrintTypeFilter = (printType) => {
    this.setState({
      printType,
    });
  };

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${key}=${params[key]}`
    );
    return queryItems.join("&");
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.search === ""){
      alert("Enter a search to continue.")
    }
    else {
      const base_url = "https://www.googleapis.com/books/v1/volumes";

      const params = {
        q: this.state.search,
        maxResults: 10,
        key: "AIzaSyCzLBVLpCtQHMf4ql8ySnqWVv9bzLo6KNE",
      };

      const queryString = this.formatQueryParams(params);
      const url = encodeURI(base_url + "?" + queryString);

      console.log(url);

      const options = {
        method: "GET",
      };

      fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          books: data.items,
          error: null,
          hasSubmitted: true,
          failedSearchHold: this.state.search
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
    }
  }

  render() {

    const {
      hasSubmitted,
      failedSearchHold,
      error,
      books,
      bookType,
      printType,
      isEbook,
      saleability,
    } = this.state

    return (
      <div>
        <header className="header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />
        <Filter
          handlePrintTypeFilter={this.handlePrintTypeFilter}
          handleBookTypeFilter={this.handleBookTypeFilter}
        />
        <section id="content">

          {!hasSubmitted && (
            <div className="defaultMessage">
              Search for your favorite books to begin
            </div>
          )}

          {hasSubmitted && error && (
            <div id="errorMessage" className="renderBookError">
              {this.state.error}.<br/>Please try your request again later.
            </div>
          )}

          {hasSubmitted && (books === undefined || books.length === 0) && (
            <div className="searchEmpty">No results for "{failedSearchHold}"</div>
          )}

          {books && books.length > 0 && (
            <BookList
              bookData={books}
              bookType={bookType}
              printType={printType}
              isEbook={isEbook}
              saleability={saleability}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;

