import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search something..."
      />
      <button type="submit" className="search-button">
        SEARCH!
      </button>
    </form>
  );
};

export default Form;
