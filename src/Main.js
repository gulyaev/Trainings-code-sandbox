import React from 'react';
import {useAlert} from '../src/alert/AlertContext'

export default function Main () {
    const {show} = useAlert();

    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={()=>{show('Какой-то текст')}} className="btn btn-success">Показать алерт</button>
        </>
    )
}