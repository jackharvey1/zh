import './stylesheet.css';
import { useState } from 'react';
import Audio from './components/audio';
import Tile from './components/tile';
import Footer from './components/footer';
import zhuyin from './data/zhuyin.json';
import useShortcut from './lib/useShortcut';

const generateNewPair = () => {
    const numberOfItems = zhuyin.length;
    const itemIndexToGuess = Math.floor(Math.random() * numberOfItems);
    return zhuyin[itemIndexToGuess];
};

const setupShortcuts = (setSelected, resetState) => {
    zhuyin.forEach(({ character, key }) => {
        useShortcut(key, () => setSelected(character));
    });
};

function App() {
    const [selected, setSelected] = useState();
    const [answer, setAnswer] = useState(generateNewPair());

    const resetState = () => {
        setAnswer(generateNewPair());
        setSelected(undefined);
    };

    setupShortcuts(setSelected, resetState);
    useShortcut(' ', resetState);

    return (
        <div className="App">
            <Audio
                pathToAudio={process.env.PUBLIC_URL + 'audio/' + answer.audio}
            />
            <div className="grid">
                {zhuyin.map(({ character, key }) => (
                    <Tile
                        key={character}
                        tileCharacter={character}
                        inputKey={key}
                        answer={answer.character}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <Footer
                answer={answer.character}
                selected={selected}
                setSelected={setSelected}
                footerHandleOnClick={resetState}
            />
        </div>
    );
}

export default App;
