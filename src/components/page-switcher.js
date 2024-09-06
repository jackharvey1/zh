import './page-switcher.css';
import { useState } from 'react';

import ToggleButton from './toggle-button';

const buttons = ['Learn', 'Test'];

export default () => {
    const [position, setPosition] = useState(0);
    return (
        <div className="page-switcher--container">
            <div className="page-switcher">
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
        </div>
    );
};
