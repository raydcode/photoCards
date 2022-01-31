import React from 'react';

function Card({ imageUrl,title }) {
  return (
    <article className="single-tour">
      <img src={imageUrl} alt="" />
      <footer>
        <div className="">
          <h4>{title}</h4>
        </div>
        <p>
          <button></button>
        </p>
        <button className="delete-btn">Delete</button>
      </footer>
    </article>
  );
}

export default Card;
