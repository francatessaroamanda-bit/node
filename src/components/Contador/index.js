import './style.css';
import { useState } from 'react';

export default function Contador(){
    const [resultado, setResultado] = useState("falso");

    function verificar(valor){
        if(valor>=10){
            setResultado("Verdadeiro");
        } else {
            setResultado("Falso")
    }
    }

    //function incrementar(){
        //setNum(num +1);
    //}
    
    //function decrementar(){
       // setNum(num - 1);
    //}

    return (
            <div className= 'pagina'>
            <h3>E maior ou igual a 10?</h3>
            <input
                type='text'
                onChange={(e) => verificar(e.target.value)}
            />
            <p>{resultado}</p>
            
            </div>
);
}
