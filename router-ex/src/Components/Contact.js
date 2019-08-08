import React from 'react'
// import { setTimeout } from 'timers';
import Ann from '../ann.png';

export default function Contact(props) {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div className="container contact">
            <h4 className="center">Contact</h4>
            <p>Lorem huipsum</p>
            <img src={ Ann } alt="Ann"/>
        </div>
    )
}
