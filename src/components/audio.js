import './stylesheet.css';

export default ({ pathToAudio }) => {
    const audio = new Audio(pathToAudio);

    function play() {
        audio.play();
    }

    return (
        <div className="audio-container">
            <p className="audio-text">Tap the character you hear</p>
            <span className="audio-image" onClick={play}>
                <img
                    alt="audio icon"
                    src={process.env.PUBLIC_URL + '/speaker.svg'}
                />
            </span>
        </div>
    );
};
