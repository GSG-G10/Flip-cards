import React, { useState, useEffect } from "react";

import Game from "../game/game"

import './menu.css'

export default function Menu () {
    const [options, setOptions] = useState(null);
    const [highScore, setHighScore] = useState();
    const [score, setScore] = useState(0);

    useEffect( () => {

        const json = localStorage.getItem('highest-score')
        const savedScore = JSON.parse(json)
        if (savedScore) {
          setHighScore(savedScore)
        }
        

        return () => console.log('clearup here') ;
    }, [])

    const scoreHandler = (e) => {
        setScore(e);
    }


    return (
        <>

            <div className="container">
                <h1> Flip Cards Game</h1>
                <h2 > Best Score: {highScore}</h2>
                <h2 > your Score: {score} </h2>
                <div className="options">
                    { !options ? (
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
                            }, 5)
                        }}> Start Over</button>
                        <button onClick={() => setOptions(null)} > Menu </button>
                        </>
                    )}
                </div>
            </div>


            { options ? ( 
                <Game 
                    options = {options}
                    setOptions = {setOptions}
                    highScore = {highScore}
                    setHighScore = {setHighScore}
                    scoreHandler= {scoreHandler}

                />
            ) :
             ( 
                 <h2>please choose a mood to play</h2>
             )}

        </>

    );

}