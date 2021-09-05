import Knop from "./Knop";
import { Counter } from '../types';

interface ListProps {
    counters: Counter[]
}

const LijstKnoppen = ({counters}: ListProps) => {
    return (
        <div>
        <div>Dit is mijn lijst van knoppen</div>
        <ul>{counters.map((counter: Counter) => {
            return <Knop counter={counter}/>
            })}
        </ul>   
        </div>
    )
}

export default LijstKnoppen;