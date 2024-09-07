import './stylesheet.css';

export default () => (
    <div className="audio-container">
        <p className="audio-text">Tap the character you hear</p>
        <span className="audio-image">
            <img
                alt="audio icon"
                src={process.env.PUBLIC_URL + '/speaker.svg'}
            />
        </span>
    </div>
);
