import React, { useState } from 'react';
import Slots from '../../components/slots/Slots';
import Title from '../../components/title/Title';
import { GAME_OBJECTS_ARRAY } from '../../utils/constants';
import { getRandomInt } from '../../utils/functions';
import styles from "./Game.module.css";
const Game = () => {
    const [character, setCharacter] = useState(null);
    const [gameArray, setGameArray] = useState([])
    const characterOptionsArray = GAME_OBJECTS_ARRAY.filter(obj => obj.type === "animal")
    const handleCharacterSelect = (selectedCharacter) => {
        setCharacter(selectedCharacter)
    }
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
        <div className={styles.root}>
            <Title label={"Shuffle"} />
            <Slots array={character ? gameArray: characterOptionsArray} onClick={character ? null: handleCharacterSelect} />
            <button onClick={shuffleGameArray}>Shuffle</button>
        </div>
    )
}

export default Game
