import './stylesheet.css';
import { useState } from 'react';

const buttons = ['Listen', 'Practise', 'Test'];

export default () => {
    const [position, setPosition] = useState(0);
    return (
        <div className="navbar">
            {buttons.map((text, i) => (
                <ToggleButton
                    key={i}
                    enabled={i === position}
                    handleOnClick={() => setPosition(i)}
                >
                    {text}
                </ToggleButton>
            ))}
        </div>
    );
};

const ToggleButton = ({ children, enabled, handleOnClick }) => {
    const baseClassName = 'toggle-button';
    const enabledClassName = 'toggle-button--enabled';
    const className = enabled
        ? `${baseClassName} ${enabledClassName}`
        : baseClassName;
    return (
        <div className={className} onClick={handleOnClick}>
            {children}
        </div>
    );
};
