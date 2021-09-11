import { Counter } from '../types';
import Ophoger from "./Ophoger";

interface KnopProps {
    counter: Counter
}


const Knop  = ({ counter }: KnopProps) => {
    return ( 
        <div>
            <div>key={counter.id}</div>
            <div>naam={counter.name}</div>
            <div>calcul={counter.calcul}</div>
            <div>totaal={counter.value}</div>
            <Ophoger />
        </div>
     );
}
 
export default Knop;