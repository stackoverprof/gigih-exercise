import React from "react";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="App-header">
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
      <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        alt=""
        className="image-gif"
      />
      <style jsx>{`
        .search-form {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search-input {
          background: #fff2;
          border: 1px solid #fff;
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 24px;
          width: 400px;
          color: white;
        }
        .search-button {
          height: 52px;
          background: white;
          border: none;
          border-radius: 6px;
          padding: 10px 14px;
          margin-left: 12px;
          font-weight: bold;
          font-size: 16px;
        }

        .image-gif {
          margin: 40px;
          width: 400px;
          height: 400px;
        }
      `}</style>
    </header>
  );
};

export default Home;
