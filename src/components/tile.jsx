import './tile.css';

const handleOnClick = (character, selected, setSelected) => {
    if (!selected) {
        setSelected(character);
    }
};

export default ({ tileCharacter, inputKey, answer, selected, setSelected }) => {
    let className = 'tile';
    if (selected === tileCharacter && tileCharacter === answer) {
        className = `${className} tile--correct`;
    } else if (selected === tileCharacter && tileCharacter !== answer) {
        className = `${className} tile--incorrect`;
    }

    return (
        <div
            className={className}
            onClick={() => handleOnClick(tileCharacter, selected, setSelected)}
        >
            {tileCharacter}
            <span className="tile-key">{inputKey}</span>
        </div>
    );
};
