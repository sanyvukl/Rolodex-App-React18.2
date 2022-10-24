import React from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const {handleChange, searchField, setSearchField, placeholder, className} = props;
  const clearInput = (event)=>{
    event.preventDefault();
    setSearchField("");
  }
  return(
    <div className="form">
      <input
        className={`search-box ${className}`}
        type="text"
        value={searchField}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button onClick={clearInput} style={{display: searchField === "" ? "none": "inline-block"}}>x</button>
    </div>
  )
}

export default SearchBox;