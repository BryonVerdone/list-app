import React, { useState } from 'react';
import List from './list';
import friends from './friends.js';
function App() {
  const [people, setPeople] = useState(friends);
  return (
    <article className='container'>
      <List people={people} />
    </article>
  );
}
export default App;
