import React, { MouseEventHandler } from 'react';
import { useState } from 'react';
import { ChangeEventHandler } from 'react';

const Ophoger = () => {
  const [waarde, setWaarde] = useState(0);
  const [teller, setteller] = useState(3);

  const telBij : MouseEventHandler<HTMLInputElement> = (event) => {
    setteller(teller+waarde);
  }
  
  const handleWaardeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWaarde(parseInt(event.target.value));
  }

  return (
    <div>
    <input type="number" id="waarde" onChange={handleWaardeChange} value={waarde}/>
    <input type="button" id="submit" value="tel bij" onClick={ telBij } />
    <p>De teller is { teller }</p>
    </div>
  );
}

export default Ophoger;
