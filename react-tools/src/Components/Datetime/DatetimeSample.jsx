import React from 'react'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

let inputProps = {
    placeholder: 'N/A',

};

const DatetimeSample = () => {
    return (
        <Datetime inputProps={ inputProps }/>
    )
}

export default DatetimeSample
