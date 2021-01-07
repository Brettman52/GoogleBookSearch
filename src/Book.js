import React from "react";
import "./Book.css";
import noImage from "./noImageVector.jpg";

export default function Book(props) {
  function checkDescriptionForNull(desc) {
    if (desc == null) {
      desc = "No description available.";
    }
    return desc;
  }

  function truncateDesc(desc) {
    const descriptionArray = desc.split(" ");

    if (descriptionArray.length > 20) {
      return descriptionArray.slice(0, 20).join(" ") + "...";
    } else {
      return descriptionArray.join(" ");
    }
  }

  function displaySalesPrice(salesInfo) {
    let saleability = "";
    if (salesInfo.saleability === "NOT_FOR_SALE") {
      saleability = "Not for sale";
    } else if (salesInfo.saleability === "FREE") {
      saleability = "Free";
    } else {
      saleability = "$" + salesInfo.listPrice.amount.toFixed(2);
    }
    return saleability;
  }

  function checkAuthorsProperty(author) {
    if (props.volumeInfo.hasOwnProperty("authors") === false) {
      author = "No author info available";
    } else {
      author = checkNumofAuthors(author);
    }
    return author;
  }

  function checkNumofAuthors(authorData) {
    if (authorData.length > 0) {
      authorData = authorData.join(", ");
    } else {
      authorData = authorData[0];
    }
    return authorData;
  }

  const { infoLink, title, authors } = props.volumeInfo;
  const checkedDesc = checkDescriptionForNull(props.volumeInfo.description);
  const truncDesc = truncateDesc(checkedDesc);
  const price = displaySalesPrice(props.saleInfo);
  const image = props.volumeInfo.hasOwnProperty("imageLinks") ? (
    <img
      src={props.volumeInfo.imageLinks.thumbnail}
      alt="bookcover"
      width="175px"
      height="250px"
    />
  ) : (
    <img
      src={noImage}
      alt="No thumbnail available"
      width="200px"
      height="225px"
    />
  );
  const authors_ = checkAuthorsProperty(authors);

  return (
    <div className="book">
      <div className="bookImage">
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      </div>
      <div className="bookRow">
        <div className="bookTitle">{title}</div>
        <div className="bookAuthor">Author(s): {authors_}</div>
        <div className="bookPrice">Price: {price}</div>
        <div className="bookDescription">{truncDesc}</div>
      </div>
    </div>
  );
}