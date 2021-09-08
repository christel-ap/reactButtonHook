import { Counter } from '../types';

export interface InputViewProps {
    onAdd: (counter: Counter) => void
}
 
const InputView = ({onAdd}: InputViewProps) => {
    const handleClick : React.MouseEventHandler<HTMLInputElement> = (event) => {
        onAdd({
            name: "teller3",
            calcul: 3,
            value: 3
        });
        console.log("button clicked");
    }

    return ( 
        <div>
            <input type="button" id="submit" value="Add 1 counter" onClick={handleClick}/>
            <p>een tellertje erbij...</p> 
        </div>
     );
}
 
export default InputView;