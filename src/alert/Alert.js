import React from 'react';
import {useAlert} from './AlertContext'

export default function Alert () {
    const alertObj = useAlert();

    if (!alertObj.visible) return null;

    return (
        <div className={"alert alert-danger"} onClick={alertObj.hide}>
            {alertObj.text}
        </div>
    )
}