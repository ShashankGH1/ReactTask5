import React, { useState } from 'react';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge=()=>{
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        const ageInMilliseconds = today - birthDate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        setAge(Math.floor(ageInYears));
    } 
    else{
        setAge(null);
    }
  };

    return (
        <div>
        <h1>Age Calculator</h1>
        <h2>Enter your date of birth: </h2>
        <br></br>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}></input>
        <br></br>
        <button onClick={calculateAge}>Calculate Age</button>
        {age !== null && <h2>Your are {age} years old</h2>}
        </div>
    );
}

export default AgeCalculator;
