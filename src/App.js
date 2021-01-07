import React, { Component } from "react";
import "./App.css";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
      printType: "ALL",
      bookType: "ALL",
      hasSubmitted: false,
      isEbook: "",
      saleability: "",
      failedSearchHold:""
    };
  }
  
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

  handleSubmit(e) {
    e.preventDefault();
if(this.state.search === ""){
  alert("Enter a search to continue.")
  } else {
    const base_url = "https://www.googleapis.com/books/v1/volumes";

    function formatQueryParams(params) {
      const queryItems = Object.keys(params).map(
        (key) => `${key}=${params[key]}`
      );
      return queryItems.join("&");
    }

    const params = {
      q: this.state.search,
      maxResults: 10,
      key: "AIzaSyCzLBVLpCtQHMf4ql8ySnqWVv9bzLo6KNE",
    };

    const queryString = formatQueryParams(params);
    const url = encodeURI(base_url + "?" + queryString);

    console.log(url);

    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
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

    const bookList = this.state.hasSubmitted ? 
      this.state.books === undefined ? 
      <div className="searchEmpty">No results for "{this.state.failedSearchHold}"</div> : 
        <BookList
          bookData={this.state.books}
          bookType={this.state.bookType}
          printType={this.state.printType}
          isEbook={this.state.isEbook}
          saleability={this.state.saleability}
        /> : 
      <div className="defaultMessage">
        Search for your favorite books to begin
      </div>;

    const error = this.state.error ? 
      <div id="errorMessage" className="renderBookError">{this.state.error}.<br/>Please try your request again later.</div> : " ";

    return (
      <div>
        <header className="header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          handleSearch={this.handleSearch}
          handleSubmit={(e) => this.handleSubmit(e)}
        />
        <Filter
          handlePrintTypeFilter={this.handlePrintTypeFilter}
          handleBookTypeFilter={this.handleBookTypeFilter}
        />
        <section id="content">
          {error}
          {bookList} 
        </section>
      </div>
    );
  }
}

export default App;

