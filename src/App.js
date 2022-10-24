import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search.box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monst, setMonst] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monst);
  // no-console
  console.log("render");

  useEffect(() => {
    const newFilteredMonsters = monst.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(`${searchField.toLowerCase()}`);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("Effect is firing");
  }, [searchField, monst]);
  useEffect(() => {
    console.log("Effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => setMonst(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(() => {
      return event.target.value;
    });
  };

  const onTitleChange = (event) => {
    setTitle(() => {
      return event.target.value;
    });
  };

  return (
    <div className="App">
      <h1 className="app-title">{title || "Monsters Rolodex"}</h1>
      <SearchBox
        className="monsters-serch-box"
        setSearchField={setSearchField}
        searchField={searchField}
        handleChange={onSearchChange}
        placeholder="Search monsters"
      />
      <SearchBox
        className="title-serch-box"
        setSearchField={setTitle}
        searchField={title}
        handleChange={onTitleChange}
        placeholder="Title"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
