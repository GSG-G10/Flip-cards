import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

import Card from "../card/card";


import './game.css'


export default function Game ({options, setOptions, highScore, setHighScore}) {
        const [game, setGame] = useState([]); // game length equals num stored in options
        const [flippedCount, setFlippedCount] = useState(0);
        const [flippedIndex, setFlippedIndex] = useState([]);

        console.log(game);

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
        }, [game])



        if (flippedIndex.length === 2) {
          // Runs if two cards have been flipped
        }




        if (game.length === 0) return <div>loading...</div>
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




        
      
  

