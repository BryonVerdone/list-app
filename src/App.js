import React, { useState } from 'react';
import List from './list';
import friends from './friends.js';
function App() {
  const [people, setPeople] = useState(friends);
  const removeItem = (id) => {
    setPeople((oldList) => {
      let newList = oldList.filter((person) => person.id != id);
      return newList;
    });
  };
  const clear = () => {
    if (people.length <= 0) {
      setPeople(people);
    } else setPeople([]);
  };
  return (
    <section className='container'>
      <h3>There are {people.length} on this list</h3>
      <List people={people} />
      <button className='clear-btn' onClick={clear}>
        Remove All
      </button>
    </section>
  );
}
export default App;
