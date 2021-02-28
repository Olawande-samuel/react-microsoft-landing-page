import React from 'react';
import {FaChevronRight} from 'react-icons/fa'

function Button(props) {
    return (
        <div>
           <button className="btn">{props.value} <FaChevronRight /> </button> 
        </div>
    )
}

export default Button
