import React from 'react';
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, job, img } = person;
        return (
          <>
            <article key={id}>
              <img className='img' src={img} alt={name} />
              <h1>{name}</h1>
              <h3>{job}</h3>
            </article>
          </>
        );
      })}
    </>
  );
};

export default List;
