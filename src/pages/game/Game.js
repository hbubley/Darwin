import React, { useState } from 'react';
import { useNavigate } from 'react-location';
import Button from '../../components/button/Button';
import Slots from '../../components/slots/Slots';
import Title from '../../components/title/Title';
import { GAME_OBJECTS_ARRAY } from '../../utils/constants';
import { getRandomInt } from '../../utils/functions';
import styles from "./Game.module.css";
const Game = () => {
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [gameArray, setGameArray] = useState([]);
    const characterOptionsArray = GAME_OBJECTS_ARRAY.filter(obj => obj.type === "animal")
    const handleCharacterSelect = (selectedCharacter) => {
        setCharacter(selectedCharacter);
        setGameArray([selectedCharacter, selectedCharacter, selectedCharacter, selectedCharacter])
    }
    const shuffleGameArray = () => {
        const newGameArray = []
        const randomIndices = []
        for (let i = 0; i < 4; i++) {
            let newInt = getRandomInt(5);
            randomIndices.push(newInt)
        }
        randomIndices.map(i => newGameArray.push(GAME_OBJECTS_ARRAY[i]))
        determineOutcome(newGameArray)
        setGameArray(newGameArray);
    }

    const determineOutcome = (gameArray) => {
        const predators = gameArray.filter((gameObject) => gameObject?.prey?.includes(character?.animal));
        const prey = gameArray.filter((gameObject) => gameObject?.predators?.includes(character?.animal));
        const sleep = gameArray.filter((gameObject) => gameObject?.resource === "cave");
    }



    return (
        <div className={styles.root}>
            <Title label={character ? "Shuffle" : "Please begin by selecting a character"} />
            <Slots array={character ? gameArray : characterOptionsArray} onClick={character ? null : handleCharacterSelect} />
            <Button label={"shuffle"} onClick={shuffleGameArray} size="large" />
            <div className={styles.linkHomeButton}>
                <Button label={"Return home"} size="large" onClick={() => navigate({ to: "/" })} variant={"primary"} />
            </div>
        </div>
    )
}

export default Game
