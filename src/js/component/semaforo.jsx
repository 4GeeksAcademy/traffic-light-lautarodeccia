import React, { useState } from 'react';

//let[color, setColor]=useState("");
// let[color, setColor]=useState("");
// let[color, setColor]=useState("");

let Luz = () => {
    let [color, setColor] = useState("");
    let [incluyePurpura, setIncluyePurpura] = useState(false);
    let seleccionar = (evento) => {
        setColor(evento.target.name);
    };

    let alternarColor = () => {
        let colores = ['rojo', 'amarillo', 'verde'];
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        setColor(colorAleatorio);
    };
    
    return (
        <div className="row justify-content-center d-flex flex-column align-items-center" id='tl'>
            <input
                type='button'
                className={`semaforo bd-highlight bg-danger ${color === 'rojo' ? 'shadow' : 'opacity-75'}`}
                name='rojo'
                onClick={seleccionar}
                style={{ height: "100px", width: "100px" }}
            ></input>
            <input
                type='button'
                className={`semaforo bd-highlight bg-warning ${color === 'amarillo' ? 'shadow' : 'opacity-75'}`}
                name='amarillo'
                onClick={seleccionar}
                style={{ height: "100px", width: "100px" }}
            ></input>
            <input
                type='button'
                className={`semaforo bd-highlight bg-success ${color === 'verde' ? 'shadow' : 'opacity-75'}`}
                name='verde'
                onClick={seleccionar}
                style={{ height: "100px", width: "100px" }}
            ></input>
            <input
                type='button'
                className="semaforo bd-highlight bg-secondary"
                name='toque'
                onClick={alternarColor}
                style={{ height: "50px", width: "50px" }}
            ></input>
        </div>
    );
};

export default Luz;