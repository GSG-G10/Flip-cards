import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";


import './card.css'

export default function Card ({
    id,
    color,
    game,
    flippedCount,
    setFlippedCount,
    flippedIndex,
    setFlippedIndex,
  }) {


    const [flipped, setFlipped] = useState(false);
    const {transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80},
      })

      useEffect(() => {
        console.log('Flipped Indexes Changed')
        if (flippedIndex[2] === true && flippedIndex.indexOf(id) > -1) {
            setTimeout(() => {
              setFlipped(state => !state)
              setFlippedCount(flippedCount + 1)
              setFlippedIndex([])
            }, 1000)
          } else if (flippedIndex[2] === false && id === 0) {
            setFlippedCount(flippedCount + 1)
            setFlippedIndex([])
          }
      }, [flippedIndex])


      

        const onCardClick = () => {
            if (!game[id].flipped && flippedCount % 3 === 0) {
              setFlipped(state => !state)
              setFlippedCount(flippedCount + 1)
              const newIndexes = [...flippedIndex]
              newIndexes.push(id)
              setFlippedIndex(newIndexes)
            } else if (
              flippedCount % 3 === 1 &&
              !game[id].flipped &&
              flippedIndex.indexOf(id) < 0
            ) {
              setFlipped(state => !state)
              setFlippedCount(flippedCount + 1)
              const newIndexes = [...flippedIndex]
              newIndexes.push(id)
              setFlippedIndex(newIndexes)
            }
          }

       


    return (
        <div className="test" onClick={onCardClick}> 
         <a.div
        className="c back"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
         <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: color,
        }}
      />   

        </div> 
    );
}