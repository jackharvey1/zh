import './tile.css';

const handleOnClick = (character, selected, setSelected) => {
    if (!selected) {
        setSelected(character);
    }
};

export default ({ character, answer, selected, setSelected }) => {
    let className = 'tile';
    if (selected === character && character === answer) {
        className = `${className} tile--correct`;
    } else if (selected === character && character !== answer) {
        className = `${className} tile--incorrect`;
    }

    return (
        <div
            className={className}
            onClick={() => handleOnClick(character, selected, setSelected)}
        >
            {character}
        </div>
    );
};
