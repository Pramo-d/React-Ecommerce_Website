import React from "react";

const AddMovie = (props) => {

    function submitHandler(event){

        event.preventDefault();

  const movie={
    title:event.target.value,
    openingText:event.target.value,
    releaseDate:event.target.value
  };
  props.onAddMovie(movie)
    }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" id="title"  />
      </div>
      <div>
        <label htmlFor="opening-tex">Opening Text</label>
        <textarea   type="text" id="opening-text" />
      </div>
      <div>
        <label htmlFor="release-date">Release Date</label>
        <input type="date" id="release-date" />
      </div>

      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
