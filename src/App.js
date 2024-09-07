import './App.css';
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

function App() {
    return (
        <div className="App">
            <Container>
                <Navbar />
                <Audio />
                <Grid content={zhuyin} />
            </Container>
        </div>
    );
}

export default App;
