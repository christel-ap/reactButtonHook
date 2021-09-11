import './App.css';
import { useState } from 'react';
import LijstKnoppen from './Componenten/LijstKnoppen';
import { Counter } from './types';
import InputView from './Componenten/Inputview';
import VoegCountersToe from './Componenten/VoegCountersToe';
import Verhoog from './Componenten/Verhoog';


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
    let max: number = Math.max(...counters.map((g) => g.id!),0) + 1;

    for(var j=0; j<int; j++){
      let hulp: number = j+max;
    toetevoegen[j+max-1]= {
      id: j+max,
      name: "teller"+hulp,
      calcul: j+max,
      value: j+max
  };
}
  
    console.log("dit is de inhoud van toetevoegen na de loop:");
    for(var k=0; k<toetevoegen.length; k++){
      console.log("k is ",k);
      console.log(toetevoegen[k]);
    }

    setCounters([...counters, ...toetevoegen]);

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

  const handleVerhoogClick = () => {
    console.log("in handleVerhoogClick");
    let mijntabel = counters;
    let mijnlengte = counters.length;
    console.log("lengte is "+ mijnlengte);
    for(var z=0; z<counters.length; z++){
      console.log("z is ",z);
      console.log(mijntabel[z]);
      console.log(counters[z]);
    }
  }

  return (
    <div className="App">
          <VoegCountersToe onVoegToe={initializeCounters2} />
          <Verhoog onVerhoog={handleVerhoogClick} />
          <LijstKnoppen counters={counters} />
          <InputView onAdd={handleAdd} />
 
    </div>
  );
}

export default App;

