import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
    console.log(this.state);
  };

  render() {
    return (
      <div className="main-container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
