import './App.css';

import { useState } from 'react';

import Container from './components/container';
import Navbar from './components/navbar';
import Audio from './components/audio';
import Grid from './components/grid';

const zhuyin = [
    { ㄅ: 'boo.m4a' },
    { ㄆ: 'choo.m4a' },
    { ㄇ: 'hello.m4a' },
    { ㄈ: 'boo.m4a' },
    { ㄉ: 'choo.m4a' },
    { ㄊ: 'hello.m4a' },
    { ㄋ: 'boo.m4a' },
    { ㄌ: 'choo.m4a' },
    { ㄍ: 'hello.m4a' },
    { ㄎ: 'boo.m4a' },
    { ㄏ: 'choo.m4a' },
    { ㄐ: 'hello.m4a' },
    { ㄑ: 'boo.m4a' },
    { ㄒ: 'choo.m4a' },
    { ㄓ: 'hello.m4a' },
    { ㄔ: 'boo.m4a' },
    { ㄕ: 'choo.m4a' },
    { ㄖ: 'hello.m4a' },
    { ㄗ: 'boo.m4a' },
    { ㄘ: 'choo.m4a' },
    { ㄙ: 'hello.m4a' },
    { ㄧ: 'boo.m4a' },
    { ㄨ: 'choo.m4a' },
    { ㄩ: 'hello.m4a' },
    { ㄚ: 'boo.m4a' },
    { ㄛ: 'choo.m4a' },
    { ㄜ: 'hello.m4a' },
    { ㄝ: 'boo.m4a' },
    { ㄞ: 'choo.m4a' },
    { ㄟ: 'hello.m4a' },
    { ㄠ: 'boo.m4a' },
    { ㄡ: 'choo.m4a' },
    { ㄢ: 'hello.m4a' },
    { ㄣ: 'boo.m4a' },
    { ㄤ: 'choo.m4a' },
    { ㄥ: 'hello.m4a' },
    { ㄦ: 'boo.m4a' },
];

const pages = [
    <>
        <Audio pathToAudio={process.env.PUBLIC_URL + '/audio/boo.m4a'} />
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
