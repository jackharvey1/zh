import './footer.css';

export default ({ answer, selected, footerHandleOnClick }) => {
    let footerClassName = 'footer';
    if (selected && selected === answer) {
        footerClassName = `${footerClassName} footer--correct`;
    } else if (selected && selected !== answer) {
        footerClassName = `${footerClassName} footer--incorrect`;
    }

    const text = selected ? (
        selected === answer ? (
            <p>Well done!</p>
        ) : (
            <p>{`Correct answer: ${answer}`}</p>
        )
    ) : null;

    const icon = selected ? (
        <div className="icon-container">
            {selected === answer ? (
                <img
                    alt="tick icon"
                    src={process.env.PUBLIC_URL + '/img/tick.svg'}
                />
            ) : (
                <img
                    alt="cross icon"
                    src={process.env.PUBLIC_URL + '/img/cross.svg'}
                />
            )}
        </div>
    ) : null;

    return (
        <div className={footerClassName}>
            <div className="footerContainer">
                <span className="footerIconTextContainer">
                    {icon}
                    {text}
                </span>
                {selected ? (
                    <button
                        className="button"
                        onClick={() => footerHandleOnClick()}
                    >
                        Continue
                    </button>
                ) : null}
            </div>
        </div>
    );
};
