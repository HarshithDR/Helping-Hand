import React from 'react';

const ExtraInformation = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }
    
    return (
        <div className="form">
            <h1>Extra information</h1>
            <p className="steps">Step 2 of 3</p>
            <form>
                <fieldset className="dog-size">
                    <legend>How old is the person?</legend>
                    <div className="checkbox-container">
                        <label htmlFor="small" className="checkbox">
                        <input type="checkbox" id="small" name="size" value={values.small} />
                        Child</label>
                        <label htmlFor="middle" className="checkbox">
                        <input type="checkbox" id="middle" name="size" value={values.middle} />
                        Middle Aged</label>
                        <label htmlFor="big" className="checkbox">
                        <input type="checkbox" id="big" name="size" value={values.large} />
                        Old Aged</label>
                    </div> 
                </fieldset>  
                <label htmlFor="time">When did you see the Person or Child?</label>
                <input
                    placeholder=" morning, noon, 4pm,.."
                    type="text"
                    id="time"
                    name="time"
                    value={values.when}
                    onChange={handleChange('when')}
                    />                 
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn next">Next</button>
            </footer>
        </div>
    )
}

export default ExtraInformation;