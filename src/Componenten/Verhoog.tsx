
import React from 'react';
import { MouseEventHandler } from 'react';
import { useState } from 'react';
import { Counter } from '../types';

export interface VerhoogProps {
    onVerhoog: () => void
}
 
const Verhoog = ({onVerhoog}: VerhoogProps) => {
    const handleVerhoogClick : MouseEventHandler<HTMLInputElement> = (event) => {

        console.log("verhoog button clicked");
    }

    return ( 
        <div>
             <input type="button" id="submit" value="Verhoog" onClick={handleVerhoogClick}/> 
        </div>
     );
}
 
export default Verhoog;