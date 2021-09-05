import './App.css';
import { useState } from 'react';
import LijstKnoppen from './Componenten/LijstKnoppen';
import { Counter } from './types';
import InputView from './Componenten/Inputview';
import VoegCountersToe from './Componenten/VoegCountersToe';


const App = () => { 
  const [counters, setCounters] = useState<Counter[]>([
    {
      id: 0,
      name: "teller1",
      calcul: 1,
      value: 1
    },
    {
      id: 1,
      name: "teller2",
      calcul: 2,
      value: 2
    }
  ]);


  const initializeCounters2 = (int: number, counter: Counter) => {
    console.log("int is", int);
    for(var i=0; i<int; i++){
      let max = Math.max(...counters.map((g) => g.id!),0) + 1;
      counter.id = max+i;
      counter.name = "teller"+max+i;
      counter.calcul = max+i;
      counter.value = max+i;
      setCounters([...counters, counter]);
      console.log(counter);
      console.log("counter toegevoegd", int);
    }
  }


   const handleAdd = (counter: Counter) => {
    let max = Math.max(...counters.map((g) => g.id!),0) + 1;
    counter.id = max;
    counter.name = "teller"+max+1;
    counter.calcul = max+1;
    counter.value = max+1;
    setCounters([...counters, counter]);
    console.log(counter);
  }

  return (
    <div className="App">
               <VoegCountersToe onVoegToe={initializeCounters2} />
          <LijstKnoppen counters={counters} />
          <InputView onAdd={handleAdd} />
 
    </div>
  );
}

export default App;

