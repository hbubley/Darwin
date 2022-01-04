import React, { useState } from 'react';
import { useNavigate } from 'react-location';
import Button from '../../components/button/Button';
import CharacterStats from '../../components/characterStats/CharacterStats';
import Slots from '../../components/slots/Slots';
import Title from '../../components/title/Title';
import { GAME_OBJECTS_ARRAY } from '../../utils/constants';
import { getRandomInt } from '../../utils/functions';
import styles from "./Game.module.css";
const Game = () => {
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [tempCharacter, setTempCharacter] = useState(null);
    const [gameArray, setGameArray] = useState([]);
    const characterOptionsArray = GAME_OBJECTS_ARRAY.filter(obj => obj.type === "animal")
    const handleTempCharacterSelect = (selectedCharacter) => {
        setTempCharacter(selectedCharacter);
    }
    const handleCharacterSelect = () => {
        setCharacter(tempCharacter);
        setGameArray([tempCharacter, tempCharacter, tempCharacter, tempCharacter])
    }

    const shuffleGameArray = (selectedAction) => {
        const newGameArray = []
        const randomIndices = []
        for (let i = 0; i < 4; i++) {
            let newInt = getRandomInt(5);
            randomIndices.push(newInt)
        }
        randomIndices.map(i => newGameArray.push(GAME_OBJECTS_ARRAY[i]))
        determineOutcome(newGameArray, selectedAction)
        setGameArray(newGameArray);
    }

    const determineOutcome = (gameArray, selectedAction) => {
        const predators = gameArray.filter((gameObject) => gameObject?.prey?.includes(character?.animal));
        const prey = gameArray.filter((gameObject) => gameObject?.predators?.includes(character?.animal));
        const sleep = gameArray.filter((gameObject) => gameObject?.resource === "cave");
        const updatedCharacter = { ...character }
        updatedCharacter.sleep = updatedCharacter.sleep - 5
        updatedCharacter.hunger = updatedCharacter.hunger - 5
        if (predators.length > prey.length) {
            updatedCharacter.colony_size = updatedCharacter.colony_size - 1;
        } else if (selectedAction === "sleep") {
            updatedCharacter.sleep = updatedCharacter.sleep + (sleep.length * 5)
        }
        setCharacter(updatedCharacter)
    }



    return (
        <div className={styles.root}>
            <Title label={character ? "Shuffle" : "Please begin by selecting a character"} />
            <Slots array={character ? gameArray : characterOptionsArray} onClick={character ? null : handleTempCharacterSelect} />
            <div>
                <CharacterStats
                    hunger={character ? character.hunger : tempCharacter?.hunger}
                    sleep={character ? character.sleep : tempCharacter?.sleep}
                    colonySize={character ? character.colony_size : tempCharacter?.colony_size}
                />
            </div>
            {character
                ? <div>
                    <Button
                        label={"sleep"}
                        onClick={() => shuffleGameArray("sleep")}
                        size="large"
                        variant="secondary"
                    />
                    <Button
                        label={"hunt"}
                        onClick={() => shuffleGameArray("hunt")}
                        size="large"
                        variant="secondary"
                    />
                    <Button
                        label={"breed"}
                        onClick={() => shuffleGameArray("breed")}
                        size="large"
                        variant="secondary"
                    />
                </div>
                : <Button
                    label={"Select this character"}
                    size={"large"}
                    variant={"secondary"}
                    onClick={handleCharacterSelect}
                />
            }
            <div className={styles.linkHomeButton}>
                <Button
                    label={"Return home"}
                    size="large"
                    onClick={() => navigate({ to: "/" })}
                    variant={"primary"}
                />
            </div>
        </div>
    )
}

export default Game
