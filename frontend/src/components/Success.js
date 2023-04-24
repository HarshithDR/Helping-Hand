import React from 'react';

const Success = () => {
    return (
        <div className="success">
            <h1>Successfully reported!</h1>
            <p id="success-p">Thank you for working together to save the person.</p>
            <a href="/">
                <button type="button" className="btn success-btn">Report another person</button>
            </a>
        </div>
    )
}

export default Success;