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
      name: "teller0",
      calcul: 0,
      value: 0
    }
  ]);


  const initializeCounters2 = (int: number, counter: Counter) => {
    console.log("int is", int);

    let toetevoegen: Counter[] = [];
    let max = Math.max(...counters.map((g) => g.id!),0) + 1;

    for(var i=0; i<int; i++){
      
      let hulp: number = max;
      counter.id = hulp;
      counter.name = "teller"+hulp;
      counter.calcul = hulp;
      counter.value = hulp;
      
      toetevoegen.push(counter);
      console.log(counter);
      console.log("counter toegevoegd", int);
      max++;
    }
    setCounters([...counters, counter]);
  }


   const handleAdd = (counter: Counter) => {
    let max = Math.max(...counters.map((g) => g.id!),0) + 1;
    let hulp: number = max;
    counter.id = max;
    counter.name = "teller" +  hulp;
    counter.calcul = hulp;
    counter.value = hulp;
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

