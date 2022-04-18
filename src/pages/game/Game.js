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
    const [gameText, setGameText] = useState([""]);
    const [hasLost, setHasLost] = useState(false);
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
        const statuses = []
        const predators = gameArray.filter((gameObject) => gameObject?.prey?.includes(character?.animal));
        const prey = gameArray.filter((gameObject) => gameObject?.predators?.includes(character?.animal));
        const sleep = gameArray.filter((gameObject) => gameObject?.resource === "cave");
        const mates = gameArray.filter((gameObject) => gameObject?.animal === character?.animal);
        const updatedCharacter = { ...character }
        updatedCharacter.sleep = updatedCharacter.sleep - 5
        updatedCharacter.hunger = updatedCharacter.hunger - 5
        if (predators.length > 2) {
            updatedCharacter.colony_size = updatedCharacter.colony_size - 1;
            statuses.push(`You were attacked while attempting to ${selectedAction}! Your colony has shrunk...`)
        } else if (selectedAction === "sleep" && updatedCharacter.sleep < 100 && sleep.length > 0) {
            updatedCharacter.sleep = updatedCharacter.sleep + (sleep.length * updatedCharacter?.regeneration?.sleep)
            statuses.push(`Don't you look rested! Your sleep has increased by ${sleep.length * updatedCharacter?.regeneration?.sleep}`)
        } else if (selectedAction === "hunt" && updatedCharacter.hunger < 100 && prey.length > 0) {
            updatedCharacter.hunger = updatedCharacter.hunger + (prey.length * updatedCharacter?.regeneration?.hunger)
            statuses.push(`Succesful hunt! Your hunger has increased by ${prey.length * updatedCharacter?.regeneration?.hunger}`)
        } else if (selectedAction === "breed" && mates.length > 0) {
            updatedCharacter.colony_size = updatedCharacter.colony_size + (mates.length * updatedCharacter?.regeneration?.offspring)
            statuses.push(`What luck! Your colony size has increased by ${mates.length * updatedCharacter?.regeneration?.offspring}`)
        } else {
            statuses.push("Boring.... Nothing has happened")
        }

        if (updatedCharacter.sleep <= 0 || updatedCharacter.hunger <= 0) {
            updatedCharacter.colony_size = updatedCharacter.colony_size - 1
            if (updatedCharacter.sleep <= 0) {
                updatedCharacter.sleep = updatedCharacter.base_stats.sleep
                statuses.push("Lack of energy has caused one of your offspring to die")
            }
            if (updatedCharacter.hunger <= 0) {
                updatedCharacter.hunger = updatedCharacter.base_stats.hunger
                statuses.push("Lack of food has caused one of your offspring to die")
            }
        }

        if (updatedCharacter.offspring < 0) {
            setHasLost(true)
        }
        setCharacter(updatedCharacter)
        setGameText(statuses)
    }




    return (
        <div className={styles.root}>
            <Title label={character ? "Shuffle" : "Please begin by selecting a character"} />
            <Slots array={character ? gameArray : characterOptionsArray} onClick={character ? null : handleTempCharacterSelect} highlightedCard={character ? null : tempCharacter} />
            {
                gameText.length > 0 && gameText.map(text => {
                    return  <p>{text} </p> 
                })
            }
            <CharacterStats
                hunger={character ? character.hunger : tempCharacter?.hunger}
                sleep={character ? character.sleep : tempCharacter?.sleep}
                colonySize={character ? character.colony_size : tempCharacter?.colony_size}
            />
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
