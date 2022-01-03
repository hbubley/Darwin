import React, { useState } from 'react'
import Slot from './components/slot/Slot';

const App = () => {
    const outcomes = [{
        type: "animal",
        animal: "rabbit",
        image: "",
    }, {
        type: "animal",
        animal: "falcon",
        image: "",
    }, {
        type: "animal",
        animal: "snake",
        image: "",
    }, {
        type: "resource",
        resource: "cave",
        image: "",
    },
    {
        type: "resource",
        resource: "carrots",
        image: "",

    }];
    const [gameArray, setGameArray] = useState([])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const shuffleGameArray = () => {
        const newGameArray = []
        const randomIndices = []
        for (let i = 0; i < 4; i++) {
            let newInt = getRandomInt(4);
            randomIndices.push(newInt)
        }
        //produce 4 random numbers, they do not need to be different, and push to the random indices array 
        randomIndices.map(i => newGameArray.push(outcomes[i]))
        console.log(newGameArray)
        setGameArray(newGameArray);
    }

    return (
        <div>
            {
                gameArray.map((slot) =>
                    <Slot value={slot} />
                )
            }
            <button onClick={shuffleGameArray}>Shuffle</button>
        </div>
    )
}

export default App
