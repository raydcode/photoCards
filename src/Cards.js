import React from 'react';
import Card from './Card';

function Cards({ data, removeCards }) {
  return (
    <section>
      <div className="title">
        <h2>Photo Cards</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((item) => {
          return (
            <Card
              key={`card-${item.id}`}
              id={item.id}
              title={item.title}
              imageUrl={item.thumbnailUrl}
              removeCards={removeCards}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Cards;
