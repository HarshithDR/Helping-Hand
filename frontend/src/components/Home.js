import React from 'react';
import logo from '../img/home.png';

const Home = ({ nextStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="home">
            <img src={logo} alt="" width="320" height="auto" />
            <p id="home-p">
                If you see an homeless person or a child labour on the street, please help by 
                filling out the form in this app. Police station nearby will be notified and
                help the person as soon as possible.
            </p>
            <button onClick={Next} className="btn home-btn">Report</button>
        </div>
    )
}

export default Home;