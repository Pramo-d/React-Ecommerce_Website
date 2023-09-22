import React, { useState } from "react";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    props.onAddMovie(movie);

    // Reset the form after submitting
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          type="text"
          id="opening-text"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="release-date">Release Date</label>
        <input
          type="date"
          id="release-date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>

      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
