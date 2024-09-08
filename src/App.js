import './App.css';

import { useState } from 'react';

import Container from './components/container';
import Navbar from './components/navbar';
import Audio from './components/audio';
import Grid from './components/grid';

const zhuyin = [
    'ㄅ',
    'ㄆ',
    'ㄇ',
    'ㄈ',
    'ㄉ',
    'ㄊ',
    'ㄋ',
    'ㄌ',
    'ㄍ',
    'ㄎ',
    'ㄏ',
    'ㄐ',
    'ㄑ',
    'ㄒ',
    'ㄓ',
    'ㄔ',
    'ㄕ',
    'ㄖ',
    'ㄗ',
    'ㄘ',
    'ㄙ',
    'ㄧ',
    'ㄨ',
    'ㄩ',
    'ㄚ',
    'ㄛ',
    'ㄜ',
    'ㄝ',
    'ㄞ',
    'ㄟ',
    'ㄠ',
    'ㄡ',
    'ㄢ',
    'ㄣ',
    'ㄤ',
    'ㄥ',
    'ㄦ',
];

const pages = [
    <>
        <Audio />
        <Grid content={zhuyin} />
    </>,
    <Grid content={zhuyin} />,
];

function App() {
    const [position, setPosition] = useState(0);

    return (
        <div className="App">
            <Container>
                <Navbar position={position} setPosition={setPosition} />
                {pages[position]}
            </Container>
        </div>
    );
}

export default App;
