import React from 'react';
import friends from './friends.js';
const List = () => {
  const [people, setPeople] = React.useState(friends);
  const removeItem = (id) => {
    setPeople((oldList) => {
      let newList = oldList.filter((person) => person.id != id);
      return newList;
    });
  };
  const clear = () => {
    setPeople([]);
  };
  return (
    <>
      <h3>The are {people.length} people on this list</h3>
      {people.map((person) => {
        const { id, name, job, img } = person;

        return (
          <article className='card' key={id}>
            <img className='img' src={img} alt={name} />
            <h1>{name}</h1>
            <h3>{job}</h3>
            <button className='remove-btn' onClick={() => removeItem(id)}>
              Remove
            </button>
          </article>
        );
      })}
      <button className='clear-btn' onClick={clear}>
        Remove All
      </button>
    </>
  );
};

export default List;
