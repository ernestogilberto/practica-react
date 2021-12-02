import './App.css';
import React, {useEffect, useState} from 'react';
import getPeople from './utils/fetchData';
import People from './components/People';
import Counter from './components/Counter';

function App() {

  const [people, setPeople] = useState([]);
  const [id, setId] = useState(1);


  useEffect(() => {
    getPeople(id).then(r => setPeople(r));
  }, [id])

  const addId = () => {
    setId(id + 1);
  }

  const reduceId = () => {
    id > 1 && setId(id - 1);
  }

  return (
    <div className="App">
      <h1>People Star Wars</h1>
      <Counter id={id} addId={addId} reduceId={reduceId}/>
      <People {...people}/>
    </div>
  );
}

export default App;
