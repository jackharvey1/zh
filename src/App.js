import './stylesheet.css';
import { useState } from 'react';
import Audio from './components/audio';
import Tile from './components/tile';
import Footer from './components/footer';
import zhuyin from './data/zhuyin.json';

const generateNewPair = () => {
    const numberOfItems = Object.keys(zhuyin).length;
    const itemIndexToGuess = Math.floor(Math.random() * numberOfItems);
    return Object.entries(zhuyin)[itemIndexToGuess];
};

function App() {
    const [selected, setSelected] = useState();
    const [currentPair, setCurrentPair] = useState(generateNewPair());

    const resetState = () => {
        setCurrentPair(generateNewPair());
        setSelected(undefined);
    };

    const [answer, audio] = currentPair;

    return (
        <div className="App">
            <Audio pathToAudio={process.env.PUBLIC_URL + 'audio/' + audio} />
            <div className="grid">
                {Object.keys(zhuyin).map((item) => (
                    <Tile
                        key={item}
                        character={item}
                        answer={answer}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <Footer
                answer={answer}
                selected={selected}
                setSelected={setSelected}
                footerHandleOnClick={resetState}
            />
        </div>
    );
}

export default App;
