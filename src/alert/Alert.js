import React from 'react';
import {useAlert} from './AlertContext'

export default function Alert () {
    const alertObj = useAlert();

    if (!alertObj.visible) return null;

    return (
        <div className={"alert alert-danger"} onClick={alertObj.toggle}>
            Это очень и очень важное сообщение
        </div>
    )
}