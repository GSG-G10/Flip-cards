import React, { useState, useEffect, useRef } from "react";

import Card from "../card/card";


import './game.css'


export default function Game ({options, setOptions, highScore, setHighScore, scoreHandler}) {
        const [game, setGame] = useState([]); // game length equals num stored in options
        const [flippedCount, setFlippedCount] = useState(0);
        const [flippedIndex, setFlippedIndex] = useState([]);
        const [score, setScore] = useState(0);
        const [best, setBest] = useState(0);

        console.log('HEEREEEE',best);

        // const [result, setResult] = useState([]);


        const colors = [
            '#ecdb54',
            '#e34132',
            '#6ca0dc',
            '#944743',
            '#dbb2d1',
            '#ec9787',
            '#00a68c',
            '#645394',
            '#6c4f3d',
            '#ebe1df',
            '#bc6ca7',
            '#bfd833',
          ]


        useEffect( () => {

            const newGame = []

            for (let i = 0; i < options / 2; i++) {
              const firstOption = {
                id: 2 * i,
                colorId: i,
                color: colors[i],
                flipped: false,
              }

              const secondOption = {
                id: 2 * i + 1,
                colorId: i,
                color: colors[i],
                flipped: false,
              }
        
              newGame.push(firstOption)
              newGame.push(secondOption)
            }
        
            const shuffledGame = newGame.sort(() => Math.random() - 0.5)
            setGame(shuffledGame)


        return () => console.log('clearup here') ;

        } ,[] )


        useEffect(() => {
          // Loads when the game variable changes
          const finished = !game.some(card => !card.flipped)
          scoreHandler(flippedCount)
          const trying = best
          if (finished && game.length > 0) {
            setTimeout(() => {
        
                 if (true) {
                const result = flippedCount;
                localStorage.setItem('result',  JSON.stringify(result))
                  setBest(result)

                  const testing = best;
                  if (testing < result){
                    setBest(testing)
                  localStorage.setItem('BEST',  JSON.stringify(testing) ) }

                  if (testing > result){
                    localStorage.setItem('BEST',  JSON.stringify(result) ) }

                    console.log("FINAL BEST: ", testing);
                  

                const gameLength = game.length
                setOptions(null)
                setTimeout(() => {
                  setOptions(gameLength)
                }, 5)
              } else {
              }
            }, 4000)
          }

        }, [game])




        if (flippedIndex.length === 2) {

          // Runs if two cards have been flipped

          const match = game[flippedIndex[0]].colorId === game[flippedIndex[1]].colorId

          if (match) {
              
              
              const newGame = [...game]
              newGame[flippedIndex[0]].flipped = true
              newGame[flippedIndex[1]].flipped = true
              setGame(newGame)
              setScore(score)
              scoreHandler(score);
        
            const newIndexes = [...flippedIndex]
            newIndexes.push(false)
            setFlippedIndex(newIndexes)
          } else {
            const newIndexes = [...flippedIndex]
            newIndexes.push(true)
            setFlippedIndex(newIndexes)
          }
        }




        if (!game.length) return <div>loading...</div> //game only renders when cards are ready
        else {
          return (
            <div id="cards">
              {game.map((card, index) => (
                <div className="card" key={index}>
                  <Card
                    id={index}
                    color={card.color}
                    game={game}
                    flippedCount={flippedCount}
                    setFlippedCount={setFlippedCount}
                    flippedIndex={flippedIndex}
                    setFlippedIndex={setFlippedIndex}
                  />
                </div>
              ))}
            </div>
          )
        }
      }




        
      
  

