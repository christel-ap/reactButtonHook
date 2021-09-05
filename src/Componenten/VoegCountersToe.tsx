
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
        
        onVoegToe(aantalTellers, {
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