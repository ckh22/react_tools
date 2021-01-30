import React, {useState} from 'react'
import Cleave from 'cleave.js/react';
import "cleave.js/dist/addons/cleave-phone.us";
import {Button} from 'react-bootstrap';

const CleaveJSSample = () => {
    const [creditCardRawValue, setCreditCardRawValue] = useState('');
    const [phoneRawValue, setPhoneRawValue] = useState('');
    const [customRawValue, setCustomRawValue] = useState('');

    function handleChange(event) {}
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <header style={{margin: '0 auto', padding: '1em'}}>CleaveJSSample</header>
            <hr style={{padding: '1em'}}/>
            <div style={{margin: '0 auto'}}>
                <div>
                    <Cleave placeholder="Enter credit card #"
                        options={
                            {creditCard: true}
                        }
                        onChange={
                            (evt) => setCreditCardRawValue(evt.target.rawValue)
                        }/>
                    <p>credit card: {creditCardRawValue}</p>
                </div>
                <div>
                    <Cleave options={
                            {
                                blocks: [
                                    4, 3, 3
                                ],
                                delimiter: '-',
                                numericOnly: true
                            }
                        }
                        onChange={
                            (evt) => setCustomRawValue(evt.target.rawValue)
                        }/>
                    <p>custom: {customRawValue}</p>
                </div>

                <div>
                    <Cleave className="css-phone"
                        options={
                            {
                                phone: true,
                                phoneRegionCode: 'US'
                            }
                        }
                        onChange={
                            (evt) => setPhoneRawValue(evt.target.rawValue)
                        }/>
                    <p>phone: {phoneRawValue}</p>
                </div>
            </div>


        </div>
    )
}

export default CleaveJSSample
