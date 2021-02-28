import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function SecondBanner() {
    return (
        <div className="secondBanner-wrapper">
            <p>Follow Microsoft <span> <FaFacebook /> </span><span> <FaTwitter /> </span><span> <FaLinkedin /> </span></p>
        </div>
    )
}

export default SecondBanner
