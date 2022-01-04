import React, {useState} from 'react';
import { useNavigate } from 'react-location';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import styles from './Home.module.css';
const Home = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const toggleShowInstructions = () => {
        setShowInstructions(!showInstructions)
    }
    const navigate = useNavigate()
    return (
        <div className={styles.root}>
            <Title label={"Darwin"} />
            <img className={styles.image} src='https://res.cloudinary.com/dum4u7sro/image/upload/v1592065664/Untitled_design_1_w8jyxd.png' alt="Darwin logo" />
            <div>
                <Button label={"Play"} variant={"primary"} size={"large"} onClick={() => navigate({ to: "/game" })} />
                <Button label={"Instructions"} variant={"primary"} size={"large"} onClick={toggleShowInstructions} />
            </div>
        </div>
    )
}

export default Home
