import React, { useState } from 'react'
import Slots from './components/slots/Slots';
import { GAME_OBJECTS_ARRAY } from './utils/constants';
import { getRandomInt } from './utils/functions';

const App = () => {
    const [gameArray, setGameArray] = useState([])

    const shuffleGameArray = () => {
        const newGameArray = []
        const randomIndices = []
        for (let i = 0; i < 4; i++) {
            let newInt = getRandomInt(5);
            randomIndices.push(newInt)
        }
        randomIndices.map(i => newGameArray.push(GAME_OBJECTS_ARRAY[i]))
        setGameArray(newGameArray);
    }

    return (
        <div>
            <Slots array={gameArray} />
            <button onClick={shuffleGameArray}>Shuffle</button>
        </div>
    )
}

export default App
