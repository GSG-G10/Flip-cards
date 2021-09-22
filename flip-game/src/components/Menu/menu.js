import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

import './menu.css'

export default function Menu () {

    const [options, setOptions] = useState(null);
    const [highScore, setHighScore] = useState();

    useEffect( () => {



        return () => console.log('clearup here') ;
    }, [])




    return (
        <>

            <div className="container">
                <h1> Flip Cards Game</h1>
                <h2 > High Score: {highScore}</h2>
                <div className="options">
                    { options === null ? (
                        <>
                            <button onClick= { () => setOptions(12)}> Easy </button>
                            <button onClick= { () => setOptions(18)}> Medium </button>
                            <button onClick= { () => setOptions(24)}> Hard </button>
                        </>
                    ) : (
                        <>
                        <button onClick= { () => {
                            const selectedOption = options;
                            setOptions(null)
                            setTimeout( () => {
                                setOptions(selectedOption)
                            }, 1000)
                        }}> Start Over</button>
                        <button onClick={() => setOptions(null)} > Menu </button>
                        </>
                    )}
                </div>
            </div>

        </>

    );

}