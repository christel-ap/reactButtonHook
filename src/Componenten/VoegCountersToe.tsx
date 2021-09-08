
import React from 'react';
import { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { Counter } from '../types';

export interface VoegCountersToeProps {
    onVoegToe: (int: number, counter: Counter) => void
}
 
const VoegCountersToe = ({onVoegToe}: VoegCountersToeProps) => {
    const [aantalTellers, setAantalTellers] = useState<number>(1);
    const handleAantalTellersChange : ChangeEventHandler<HTMLInputElement> = (event) => {

        setAantalTellers(parseInt(event.target.value));
        
// op dit moment is de setState van hierboven (setAantalTellers) nog niet uitgevoerd, daarom niet aantalTellers gebruiken

        onVoegToe(parseInt(event.target.value), {
            name: "teller3",
            calcul: 3,
            value: 3
        });

        console.log(event.target.value);
        console.log("tellerke verhoogd");
        console.log("button clicked");
    }

    return ( 
        <div>
            <input type="number" id="aantalTellers" name="aantalTellers" onChange={handleAantalTellersChange} value={aantalTellers}/> 
            <p>een tellertje erbij...</p> 
        </div>
     );
}
 
export default VoegCountersToe;