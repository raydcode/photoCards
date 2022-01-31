import React from 'react';
import Card from './Card';

function Cards({ data }) {
  return (
    <section>
      <div className="title">
        <h2>our Albums</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((item) => {
          return (
            <Card
              title={item.title}
              imageUrl={item.thumbnailUrl}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Cards;
